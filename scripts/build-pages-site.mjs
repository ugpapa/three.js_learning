import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { spawnSync } from "node:child_process";
import { dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUT_DIR = resolve(ROOT, ".pages-site");
const SITE_BASE = "/three.js_learning";

const STATIC_COPIES = [
  "index.html",
  "example-browser.css",
  "shared",
  "chapter1",
  "chapter2",
  "chapter3/index.html",
  "chapter4/index.html",
];

const DIST_COPIES = [
  "chapter3/sample/dist",
  "chapter3/project1/dist",
  "chapter3/physics/dist",
  "chapter3/project2/dist",
  "chapter3/withbootstrap/dist",
  "chapter4/advanced-showcase/dist",
];

const PORTAL_PAGES = new Set([
  "index.html",
  "chapter1/index.html",
  "chapter2/index.html",
  "chapter3/index.html",
  "chapter4/index.html",
]);

function ensureParentDir(filePath) {
  mkdirSync(dirname(filePath), { recursive: true });
}

function runBuildShowcases() {
  const result = spawnSync("node", [resolve(__dirname, "build-showcases.mjs")], {
    cwd: ROOT,
    stdio: "inherit",
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

function copyEntry(relativePath) {
  const source = resolve(ROOT, relativePath);
  const target = resolve(OUT_DIR, relativePath);

  if (!existsSync(source)) {
    throw new Error(`Missing copy source: ${relativePath}`);
  }

  ensureParentDir(target);
  cpSync(source, target, { recursive: true });
}

function walkHtmlFiles(directory, files = []) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const entryPath = join(directory, entry.name);

    if (entry.isDirectory()) {
      walkHtmlFiles(entryPath, files);
      continue;
    }

    if (entry.isFile() && extname(entry.name).toLowerCase() === ".html") {
      files.push(entryPath);
    }
  }

  return files;
}

function injectNav(html, htmlPath) {
  const relativePath = relative(OUT_DIR, htmlPath).replaceAll("\\", "/");
  if (PORTAL_PAGES.has(relativePath) || html.includes("data-example-nav")) {
    return html;
  }

  const cssHref = `${SITE_BASE}/shared/example-nav.css`;
  const scriptTag = `<script src="${SITE_BASE}/shared/example-nav.js" data-example-nav="true" data-site-root="${SITE_BASE}"></script>`;
  const cssTag = `<link rel="stylesheet" href="${cssHref}" />`;

  let nextHtml = html.includes("</head>")
    ? html.replace("</head>", `${cssTag}\n</head>`)
    : `${cssTag}\n${html}`;

  nextHtml = nextHtml.includes("</body>")
    ? nextHtml.replace("</body>", `${scriptTag}\n</body>`)
    : `${nextHtml}\n${scriptTag}`;

  return nextHtml;
}

function postProcessHtml() {
  const htmlFiles = walkHtmlFiles(OUT_DIR);

  for (const filePath of htmlFiles) {
    const html = readFileSync(filePath, "utf8");
    writeFileSync(filePath, injectNav(html, filePath));
  }
}

function verifyDistOutputs() {
  for (const relativePath of DIST_COPIES) {
    const source = resolve(ROOT, relativePath);
    if (!existsSync(source) || !statSync(source).isDirectory()) {
      throw new Error(`Missing built showcase directory: ${relativePath}`);
    }
  }
}

rmSync(OUT_DIR, { recursive: true, force: true });
mkdirSync(OUT_DIR, { recursive: true });

runBuildShowcases();
verifyDistOutputs();

for (const relativePath of [...STATIC_COPIES, ...DIST_COPIES]) {
  copyEntry(relativePath);
}

postProcessHtml();
writeFileSync(resolve(OUT_DIR, ".nojekyll"), "");

console.log(`\n[pages] static site ready at ${OUT_DIR}`);
