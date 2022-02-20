module.exports = {
  images: {
    domains: ['images-na.ssl-images-amazon.com', 'cdn.sanity.io'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./utils/generateSiteMap')
    }

    return config
  }
};
