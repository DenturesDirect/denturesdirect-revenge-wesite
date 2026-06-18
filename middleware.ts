import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'fr', 'vi', 'es', 'it'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Custom prefixing, can set to 'always' or 'as-needed'
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|en|vi|es|it)/:path*']
};
