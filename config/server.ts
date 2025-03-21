





export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),  // Lejon Strapi-n të dëgjojë për të gjitha IP-të, që është e nevojshme për Render
  port: env.int('PORT', process.env.PORT || 1337),  // Përdor portin nga ambienti (Render ka një port të caktuar)
  app: {
    keys: env.array('APP_KEYS'),  // Çelësat për siguri, do t'i kesh në Render për të ruajtur sigurinë
  },
  // Këtu mund të shtoni dhe opsione të tjera nëse keni nevojë
});
