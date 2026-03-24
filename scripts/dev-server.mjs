import { createServer } from "node:http";
import { readFileSync, existsSync, statSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { extname, dirname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const PORT = Number(process.env.PORT || 4173);
const SHOULD_BUILD = !process.argv.includes("--skip-build");
const SITE_BASE = (process.env.SITE_BASE || "/three.js_learning").replace(/\/+$/, "");

if (SHOULD_BUILD) {
  const result = spawnSync("node", [resolve(__dirname, "build-showcases.mjs")], {
    cwd: ROOT,
    stdio: "inherit",
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

const navCss = readFileSync(resolve(ROOT, "shared/example-nav.css"), "utf8");
const navJs = readFileSync(resolve(ROOT, "shared/example-nav.js"), "utf8");

const CONTENT_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".mp3": "audio/mpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".tif": "image/tiff",
  ".tiff": "image/tiff",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".gltf": "model/gltf+json",
  ".glb": "model/gltf-binary",
  ".fbx": "application/octet-stream",
  ".bin": "application/octet-stream",
};

const portalPages = new Set(["/index.html", "/chapter1/index.html", "/chapter2/index.html", "/chapter3/index.html", "/chapter4/index.html"]);

function send(res, status, body, contentType) {
  res.writeHead(status, { "Content-Type": contentType });
  res.end(body);
}

function safePathname(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const normalizedPath = normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  return normalizedPath.startsWith("/") ? normalizedPath : `/${normalizedPath}`;
}

function stripSiteBase(pathname) {
  if (pathname === SITE_BASE || pathname === `${SITE_BASE}/`) {
    return "/";
  }

  if (pathname.startsWith(`${SITE_BASE}/`)) {
    return pathname.slice(SITE_BASE.length) || "/";
  }

  return pathname;
}

function resolveFile(pathname) {
  let filePath = resolve(ROOT, `.${pathname}`);

  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    filePath = join(filePath, "index.html");
  }

  if (!existsSync(filePath) && !extname(filePath)) {
    const htmlCandidate = `${filePath}.html`;
    if (existsSync(htmlCandidate)) {
      filePath = htmlCandidate;
    }
  }

  return filePath;
}

function injectNav(html, pathname) {
  if (portalPages.has(pathname)) {
    return html;
  }

  if (html.includes("data-example-nav")) {
    return html;
  }

  const headInjection = `<link rel="stylesheet" href="${SITE_BASE}/shared/example-nav.css" />`;
  const bodyInjection = `<script src="${SITE_BASE}/shared/example-nav.js" data-example-nav="true" data-site-root="${SITE_BASE}"></script>`;

  let nextHtml = html;
  nextHtml = nextHtml.includes("</head>")
    ? nextHtml.replace("</head>", `${headInjection}\n</head>`)
    : `${headInjection}\n${nextHtml}`;

  nextHtml = nextHtml.includes("</body>")
    ? nextHtml.replace("</body>", `${bodyInjection}\n</body>`)
    : `${nextHtml}\n${bodyInjection}`;

  return nextHtml;
}

const server = createServer((req, res) => {
  const pathname = safePathname(req.url || "/");
  const appPathname = stripSiteBase(pathname);

  if (appPathname.startsWith("/.git")) {
    send(
      res,
      404,
      "<h1>Not Found</h1><p>요청한 리소스를 찾을 수 없습니다.</p>",
      "text/html; charset=utf-8"
    );
    return;
  }

  if (appPathname === "/favicon.ico") {
    send(res, 204, "", "text/plain; charset=utf-8");
    return;
  }

  if (appPathname === "/shared/example-nav.css") {
    send(res, 200, navCss, CONTENT_TYPES[".css"]);
    return;
  }

  if (appPathname === "/shared/example-nav.js") {
    send(res, 200, navJs, CONTENT_TYPES[".js"]);
    return;
  }

  const filePath = resolveFile(appPathname === "/" ? "/index.html" : appPathname);
  if (!filePath.startsWith(ROOT) || !existsSync(filePath) || statSync(filePath).isDirectory()) {
    send(
      res,
      404,
      "<h1>Not Found</h1><p>요청한 예제 페이지를 찾을 수 없습니다.</p>",
      "text/html; charset=utf-8"
    );
    return;
  }

  const extension = extname(filePath).toLowerCase();
  const contentType = CONTENT_TYPES[extension] || "application/octet-stream";

  if (extension === ".html") {
    const html = readFileSync(filePath, "utf8");
    const htmlPathname = appPathname === "/" ? "/index.html" : appPathname;
    send(res, 200, injectNav(html, htmlPathname), contentType);
    return;
  }

  const buffer = readFileSync(filePath);
  res.writeHead(200, { "Content-Type": contentType });
  res.end(buffer);
});

server.listen(PORT, () => {
  console.log(`\n[serve] Three.js example hub running at http://127.0.0.1:${PORT}`);
  console.log(`[serve] Site base path: ${SITE_BASE}`);
  console.log("[serve] Use Ctrl+C to stop the server.");
});
