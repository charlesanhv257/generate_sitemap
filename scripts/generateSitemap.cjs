// scripts/generateSitemap.js
const fs = require("fs");
const path = require("path");
// const routes = require("../src/routes").default; // Adjust the path based on your structure
const routes = require('../src/routes.cjs');

const domain = "https://www.yourwebsite.com";

const generateUrlElement = (route) => `
  <url>
    <loc>${domain}${route.path}</loc>
    <priority>${route.priority}</priority>
  </url>
`;

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(generateUrlElement).join("")}
</urlset>
`;

fs.writeFileSync(path.resolve(__dirname, "../public/sitemap.xml"), sitemap);
console.log("Sitemap generated successfully!");