
  



  module.exports = {
    upload: {
      provider: 'local',  // Mund të zgjidhni dhe provider të tjerë si 'aws-s3' etj.
      providerOptions: {
        // Mund të shtoni opsione të tjera nëse janë të nevojshme.
      },
      config: {
        sizeLimit: 10000000,  // Vendosim kufirin për madhësinë e skedarëve këtu (10MB).
      },
    },
  };