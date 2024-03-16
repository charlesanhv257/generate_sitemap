// generateSitemap.js
const fs = require("fs");
const path = require("path");
const routes = require("./routesConfig.cjs"); // Update the path as necessary

const domain = "https://statistr.com";

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `
  <url>
    <loc>${domain}${route.path}</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

fs.writeFileSync(
    path.resolve(__dirname, "./public/sitemap.xml"),
    sitemapContent
);
console.log("Sitemap generated successfully.");