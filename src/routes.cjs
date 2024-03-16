// src/routes.js
module.exports = [
    { path: '/', priority: '1.0' },
    { path: '/about', priority: '0.8' },
    // Add more static routes here
    // Dynamic routes should be resolved to actual paths
    { path: '/product/1', priority: '0.5' },
];