import { createServer } from "node:http";
import { existsSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const root = path.resolve(process.cwd(), "dist", "client");
const startPort = Number(process.env.PORT || 4173);

const mimeTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".js", "application/javascript; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".txt", "text/plain; charset=utf-8"],
  [".xml", "application/xml; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".webp", "image/webp"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".ico", "image/x-icon"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"],
  [".ttf", "font/ttf"],
  [".map", "application/json; charset=utf-8"],
]);

function contentType(filePath) {
  return mimeTypes.get(path.extname(filePath).toLowerCase()) ?? "application/octet-stream";
}

function safeJoin(...segments) {
  const resolved = path.resolve(root, ...segments);
  return resolved.startsWith(root) ? resolved : null;
}

function tryFile(requestPath) {
  const filePath = safeJoin(requestPath.replace(/^\/+/, ""));
  if (!filePath || !existsSync(filePath)) return null;
  const stat = statSync(filePath);
  return stat.isFile() ? filePath : null;
}

function resolveRequestPath(urlPath) {
  const pathname = decodeURIComponent(urlPath);

  const direct = tryFile(pathname);
  if (direct) return direct;

  if (!path.extname(pathname)) {
    const nestedIndex = tryFile(path.join(pathname, "index.html"));
    if (nestedIndex) return nestedIndex;
  }

  return path.join(root, "index.html");
}

function createPreviewServer() {
  return createServer((req, res) => {
    const requestUrl = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
    const filePath = resolveRequestPath(requestUrl.pathname);

    try {
      const body = readFileSync(filePath);
      res.statusCode = 200;
      res.setHeader("Content-Type", contentType(filePath));
      res.end(body);
    } catch {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.end("Not found");
    }
  });
}

async function listen(port) {
  const server = createPreviewServer();

  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(port, () => resolve({ server, port }));
  });
}

for (let port = startPort; port < startPort + 25; port++) {
  try {
    const { server, port: activePort } = await listen(port);
    console.log(`Static preview running at http://localhost:${activePort}/`);
    server.on("close", () => process.exit(0));
    process.on("SIGINT", () => server.close());
    process.on("SIGTERM", () => server.close());
    break;
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "EADDRINUSE") {
      continue;
    }
    throw error;
  }
}
