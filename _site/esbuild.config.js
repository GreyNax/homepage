const path = require('path')

require("esbuild").build({
  entryPoints: ["index.js"],
  bundle: true,
  outdir: path.join(process.cwd(), "assets/js"),
  absWorkingDir: path.join(process.cwd(), "/"),
  watch: process.argv.includes("--watch"),
  loader: {
    ".png": "file",
    ".svg": "file"
  },
}).catch(() => process.exit(1))
