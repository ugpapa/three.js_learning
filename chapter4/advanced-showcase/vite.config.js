const path = require("path");

export default {
  root: path.resolve(__dirname, "src"),
  base: "./",
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          "three-vendor": ["three"],
          "ui-vendor": ["lil-gui"],
        },
      },
    },
  },
  server: {
    host: true,
    port: 8090,
  },
};
