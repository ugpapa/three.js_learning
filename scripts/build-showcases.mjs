import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const PROJECTS = [
  "chapter3/sample",
  "chapter3/project1",
  "chapter3/physics",
  "chapter3/project2",
  "chapter3/withbootstrap",
  "chapter4/advanced-showcase",
];

for (const relativeDir of PROJECTS) {
  const cwd = resolve(ROOT, relativeDir);
  const viteBin = resolve(cwd, "node_modules", ".bin", "vite");

  if (!existsSync(viteBin)) {
    console.log(`\n[install] ${relativeDir}`);
    const installResult = spawnSync("npm", ["install"], {
      cwd,
      stdio: "inherit",
      shell: process.platform === "win32",
    });

    if (installResult.status !== 0) {
      process.exit(installResult.status ?? 1);
    }
  }

  console.log(`\n[build] ${relativeDir}`);
  const result = spawnSync("npm", ["run", "build"], {
    cwd,
    stdio: "inherit",
    shell: process.platform === "win32",
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

console.log("\n[build] all showcase builds completed");
