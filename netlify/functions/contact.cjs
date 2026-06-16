const { Resend } = require("resend");

const MAX_BODY_BYTES = 16 * 1024;

const jsonHeaders = {
  "Content-Type": "application/json",
  "Cache-Control": "no-store",
};

function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: jsonHeaders,
    body: JSON.stringify(body),
  };
}

function normalizeString(value) {
  return typeof value === "string" ? value.trim() : "";
}

function getHeaders(event) {
  return event && event.headers && typeof event.headers === "object" ? event.headers : {};
}

function getHeaderValue(headers, name) {
  const targetName = name.toLowerCase();

  for (const [headerName, headerValue] of Object.entries(headers)) {
    if (headerName.toLowerCase() === targetName && typeof headerValue === "string") {
      return headerValue;
    }
  }

  return "";
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char];
  });
}

function parseRequestBody(event) {
  const rawBody = event.isBase64Encoded
    ? Buffer.from(event.body || "", "base64").toString("utf8")
    : event.body || "";

  if (Buffer.byteLength(rawBody, "utf8") > MAX_BODY_BYTES) {
    return { error: "Request body is too large." };
  }

  try {
    const parsed = JSON.parse(rawBody);

    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return { error: "Invalid request body." };
    }

    return { data: parsed };
  } catch {
    return { error: "Invalid JSON request body." };
  }
}

function validateContactInput(data) {
  const name = normalizeString(data.name);
  const email = normalizeString(data.email);
  const company = normalizeString(data.company);
  const message = normalizeString(data.message);
  const honeypot = normalizeString(data.honeypot);

  if (honeypot) {
    return { honeypot: true };
  }

  if (!name || !email || !message) {
    return {
      error: "Please fill in all required fields (Name, Email, Message).",
    };
  }

  if (name.length > 100) {
    return { error: "Name must be 100 characters or fewer." };
  }

  if (company.length > 150) {
    return { error: "Company must be 150 characters or fewer." };
  }

  if (message.length > 4000) {
    return { error: "Message must be 4000 characters or fewer." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.length > 254 || !emailRegex.test(email)) {
    return { error: "Please provide a valid email address." };
  }

  return { data: { name, email, company, message } };
}

function buildEmailHtml({ name, email, company, message }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company || "N/A");
  const safeMessage = escapeHtml(message);

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
      <h2 style="color: #ff6b3d; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-top: 0;">New Contact Form Submission</h2>
      <p style="margin: 15px 0;"><strong>Name:</strong> ${safeName}</p>
      <p style="margin: 15px 0;"><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
      <p style="margin: 15px 0;"><strong>Company:</strong> ${safeCompany}</p>
      <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px; border-left: 4px solid #ff6b3d;">
        <p style="margin: 0; font-weight: bold; margin-bottom: 8px;">Message:</p>
        <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${safeMessage}</p>
      </div>
    </div>
  `;
}

function serializeError(error) {
  if (!error) {
    return null;
  }

  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
      stack: error.stack,
    };
  }

  return error;
}

function logError(message, error, context) {
  console.error(message, {
    ...(context || {}),
    error: serializeError(error),
  });
}

exports.handler = async (event) => {
  const headers = getHeaders(event);
  const method = event?.httpMethod || "";

  if (method === "OPTIONS") {
    return { statusCode: 204, headers: jsonHeaders, body: "" };
  }

  if (method !== "POST") {
    return jsonResponse(405, { success: false, error: "Method not allowed." });
  }

  const contentType = getHeaderValue(headers, "content-type");
  if (!contentType.toLowerCase().includes("application/json")) {
    return jsonResponse(415, { success: false, error: "Content-Type must be application/json." });
  }

  const parsed = parseRequestBody(event);
  if (parsed.error) {
    return jsonResponse(400, { success: false, error: parsed.error });
  }

  const validated = validateContactInput(parsed.data);
  if (validated.honeypot) {
    return jsonResponse(200, { success: true });
  }

  if (validated.error) {
    return jsonResponse(400, { success: false, error: validated.error });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const senderEmail = process.env.CONTACT_SENDER_EMAIL;
  const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL;

  if (!resendApiKey || !senderEmail || !recipientEmail) {
    logError("Contact email environment variables are not fully configured.", null, {
      missingVariables: [
        !resendApiKey ? "RESEND_API_KEY" : null,
        !senderEmail ? "CONTACT_SENDER_EMAIL" : null,
        !recipientEmail ? "CONTACT_RECIPIENT_EMAIL" : null,
      ].filter(Boolean),
    });

    return jsonResponse(500, {
      success: false,
      error: "Mail service is temporarily unavailable. Please try again later.",
    });
  }

  const contact = validated.data;
  const resend = new Resend(resendApiKey);

  try {
    const { error } = await resend.emails.send({
      from: `Afero Studio <${senderEmail}>`,
      to: [recipientEmail],
      replyTo: contact.email,
      subject: `New Contact Submission from ${contact.name}`,
      html: buildEmailHtml(contact),
    });

    if (error) {
      logError("Resend contact email failed.", error, {
        to: recipientEmail,
        from: senderEmail,
      });

      return jsonResponse(502, {
        success: false,
        error: "Mail service is temporarily unavailable. Please try again later.",
      });
    }

    return jsonResponse(200, { success: true });
  } catch (error) {
    logError("Contact email send failed.", error, {
      to: recipientEmail,
      from: senderEmail,
    });

    return jsonResponse(502, {
      success: false,
      error: "Mail service is temporarily unavailable. Please try again later.",
    });
  }
};
