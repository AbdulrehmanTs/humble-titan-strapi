module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'media-src': ["'self'", "'data:'", 'blob:', 'h-t-strapi.s3.amazonaws.com'],
          'img-src': ["'self'", 'data:', 'blob:', 'h-t-strapi.s3.amazonaws.com'],
        },
      }
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
