const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // Security: hide next.js in headers
  async redirects() {
    return [
      // ── Legacy URLs from the pre-2026 site (WordPress). The relaunch shipped
      // without these, 404ing every previously indexed page — map each old URL
      // to its closest new equivalent so link equity transfers.
      { source: '/about', destination: '/en/about-us', permanent: true },
      { source: '/our-team', destination: '/en/about-us', permanent: true },
      { source: '/first-time-patients', destination: '/en/first-time-patients', permanent: true },
      { source: '/contact', destination: '/en/contact', permanent: true },
      { source: '/full-dentures', destination: '/en/denture-services/digital-full-dentures-toronto', permanent: true },
      { source: '/immediate-dentures', destination: '/en/denture-services/digital-immediate-dentures-toronto', permanent: true },
      { source: '/partial-dentures', destination: '/en/denture-services', permanent: true },
      { source: '/implant-dentures', destination: '/en/denture-services/implant-retained-overdentures-toronto', permanent: true },
      { source: '/denture-repair', destination: '/en/denture-services/emergency-denture-repair-toronto', permanent: true },
      { source: '/denture-repairs', destination: '/en/denture-services/emergency-denture-repair-toronto', permanent: true },
      { source: '/denture-repair-a-definitive-guide', destination: '/en/blog/what-to-do-if-your-denture-breaks', permanent: true },
      { source: '/project/:slug*', destination: '/en/denture-services', permanent: true },
      // Old dated WordPress blog posts with known new equivalents
      { source: '/2024/04/12/3d-printed-digital-dentures-etobicoke-toronto-on', destination: '/en/blog/impression-free-digital-dentures', permanent: true },
      { source: '/2024/02/08/implant-supported-dentures-guide-denture-clinic-toronto', destination: '/en/blog/implant-retained-dentures-toronto-guide', permanent: true },
      { source: '/2024/02/08/permanent-dentures-whats-the-scoop-on-them', destination: '/en/blog/implant-dentures-vs-traditional-dentures', permanent: true },
      // Any other dated WordPress post → blog index
      { source: '/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug*', destination: '/en/blog', permanent: true },
      { source: '/en/denturist-woodbridge-vaughan', destination: '/en/implant-dentures-woodbridge-vaughan', permanent: true },
      { source: '/fr/denturist-woodbridge-vaughan', destination: '/fr/implant-dentures-woodbridge-vaughan', permanent: true },
      { source: '/vi/denturist-woodbridge-vaughan', destination: '/vi/implant-dentures-woodbridge-vaughan', permanent: true },
      { source: '/es/denturist-woodbridge-vaughan', destination: '/es/implant-dentures-woodbridge-vaughan', permanent: true },
      { source: '/it/denturist-woodbridge-vaughan', destination: '/it/implant-dentures-woodbridge-vaughan', permanent: true },
      { source: '/denturist-woodbridge-vaughan', destination: '/implant-dentures-woodbridge-vaughan', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.denturesdirect.ca',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'denturesdirect.ca',
        port: '',
        pathname: '/**',
      }
    ],
  },
};
 
module.exports = withNextIntl(nextConfig);
