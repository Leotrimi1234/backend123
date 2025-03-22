


module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: '@strapi/provider-upload-cloudinary',
      providerOptions: {
        cloud_name: env('dnzqnuhxb'),
        api_key: env('968985634824867'),
        api_secret: env('-9xWxDnXwsrPIxkQsFThcW_v9To'),
      },
    },
  },
});