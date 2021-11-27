
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-about-tsx": preferDefault(require("/home/mahady/MANANA/Portfolio/mahady-manana.github.io/src/pages/about.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/home/mahady/MANANA/Portfolio/mahady-manana.github.io/src/pages/index.tsx"))
}

