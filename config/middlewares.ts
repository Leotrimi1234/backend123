module.exports = [
  'strapi::logger',
  'strapi::errors',
  
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'http://localhost:3000',  // Mund ta mbash këtë për zhvillim lokal
        'https://frontend1234-neon.vercel.app', // Vendos URL-në e frontend-it të deploy-uar këtu
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    },
  },

  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', 'res.cloudinary.com'],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'res.cloudinary.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];





