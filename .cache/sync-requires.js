
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/fano/Desktop/MANANA/PORTFOLIO/new-website-mahady/.cache/dev-404-page.js")),
  "component---src-pages-about-tsx": preferDefault(require("/home/fano/Desktop/MANANA/PORTFOLIO/new-website-mahady/src/pages/about.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/home/fano/Desktop/MANANA/PORTFOLIO/new-website-mahady/src/pages/index.tsx"))
}

