module.exports = [
  'strapi::logger',
  'strapi::errors',

  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:3000',  
        'https://frontend1234-gamma.vercel.app' // URL e frontend-it të deployuar
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
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'res.cloudinary.com',
            'backend123-zs0m.onrender.com' // ✅ Shto backend-in këtu!
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'res.cloudinary.com',
            'backend123-zs0m.onrender.com' // ✅ Shto backend-in edhe këtu!
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
