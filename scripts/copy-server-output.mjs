import { cpSync, existsSync, rmSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceDir = path.join(root, "dist", "server");
const targetDir = path.join(root, "dist", "client", "server");

if (!existsSync(sourceDir)) {
  throw new Error(
    `Expected server build output at ${sourceDir}, but it does not exist. Run \`npm run build\` first.`,
  );
}

rmSync(targetDir, { recursive: true, force: true });
cpSync(sourceDir, targetDir, { recursive: true });
