const fs = require("fs");
const path = require("path");

const isCodeSandbox =
  "SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env;

const rootDir = path.resolve(__dirname, "src");
const htmlInputs = fs
  .readdirSync(rootDir)
  .filter((file) => file.endsWith(".html"))
  .reduce((entries, file) => {
    entries[file.replace(".html", "")] = path.resolve(rootDir, file);
    return entries;
  }, {});

const staticDirs = ["model", "textures", "sound"];

export default {
  root: "src/",
  publicDir: "../static/",
  base: "./",
  plugins: [
    {
      name: "copy-project-assets",
      closeBundle() {
        const distDir = path.resolve(__dirname, "dist");

        staticDirs.forEach((dirName) => {
          const sourceDir = path.resolve(rootDir, dirName);
          const targetDir = path.resolve(distDir, dirName);

          if (fs.existsSync(sourceDir)) {
            fs.cpSync(sourceDir, targetDir, { recursive: true });
          }
        });
      },
    },
  ],
  server: {
    host: true,
    open: !isCodeSandbox,
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: htmlInputs,
    },
  },
};
