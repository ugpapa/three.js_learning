(function () {
  const currentScript =
    document.currentScript || document.querySelector("script[data-example-nav='true']");
  const siteRoot = currentScript?.dataset.siteRoot || "/";
  const pathname = window.location.pathname;
  const portalPages = new Set([
    "/index.html",
    "/chapter1/index.html",
    "/chapter2/index.html",
    "/chapter3/index.html",
    "/chapter4/index.html",
    "/",
  ]);

  if (portalPages.has(pathname)) {
    return;
  }

  function toRootHref(targetPath) {
    const normalizedTarget = targetPath.replace(/^\/+/, "");

    if (siteRoot === "/") {
      return `/${normalizedTarget}`;
    }

    return `${siteRoot}${normalizedTarget}`;
  }

  const segments = pathname.split("/").filter(Boolean);
  const chapter = segments.find((segment) => /^chapter[1-4]$/.test(segment));
  const chapterHref = chapter ? toRootHref(`${chapter}/index.html`) : toRootHref("index.html");
  const exampleLabel = decodeURIComponent(segments.at(-1) || "example");

  const root = document.createElement("nav");
  root.className = "example-nav";
  root.setAttribute("aria-label", "예제 탐색");

  const path = document.createElement("div");
  path.className = "example-nav__path";
  path.textContent = `${chapter || "examples"} / ${exampleLabel}`;

  const backButton = document.createElement("button");
  backButton.type = "button";
  backButton.className = "example-nav__button";
  backButton.textContent = "뒤로";
  backButton.addEventListener("click", () => {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }
    window.location.href = chapterHref;
  });

  const chapterButton = document.createElement("a");
  chapterButton.className = "example-nav__button";
  chapterButton.href = chapterHref;
  chapterButton.textContent = "챕터 목록";

  const homeButton = document.createElement("a");
  homeButton.className = "example-nav__button example-nav__button--accent";
  homeButton.href = toRootHref("index.html");
  homeButton.textContent = "전체 홈";

  root.append(path, backButton, chapterButton, homeButton);
  document.body.append(root);
})();
