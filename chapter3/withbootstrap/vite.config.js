/** @format */

const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "src");
const htmlInputs = fs
  .readdirSync(rootDir)
  .filter((file) => file.endsWith(".html"))
  .reduce((entries, file) => {
    entries[file.replace(".html", "")] = path.resolve(rootDir, file);
    return entries;
  }, {});

export default {
  root: rootDir,
  base: "./",
  plugins: [
    {
      name: "copy-showcase-models",
      closeBundle() {
        const sourceDir = path.resolve(rootDir, "models");
        const targetDir = path.resolve(__dirname, "dist/models");

        if (fs.existsSync(sourceDir)) {
          fs.cpSync(sourceDir, targetDir, { recursive: true });
        }
      },
    },
  ],
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },

  server: {
    port: 8080,
    hot: true,
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: htmlInputs,
    },
  },
};
