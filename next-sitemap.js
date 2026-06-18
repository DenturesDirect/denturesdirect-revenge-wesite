// next-sitemap.js
module.exports = {
  siteUrl: 'https://www.denturesdirect.ca',
  generateRobotsTxt: false, // robots.txt is custom
  // Enable i18n support for all locale paths
  alternateRefs: [
    { href: 'https://www.denturesdirect.ca/en', hreflang: 'en' },
    { href: 'https://www.denturesdirect.ca/fr', hreflang: 'fr' },
    { href: 'https://www.denturesdirect.ca/vi', hreflang: 'vi' },
    { href: 'https://www.denturesdirect.ca/es', hreflang: 'es' },
    { href: 'https://www.denturesdirect.ca/it', hreflang: 'it' },
  ],
  // Change frequency & priority can be tuned per page if needed
  changefreq: 'weekly',
  priority: 0.7,
};
