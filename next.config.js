const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // Security: hide next.js in headers
  async redirects() {
    return [
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
