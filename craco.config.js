const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
        '@Src': path.resolve(__dirname, './src'),
        '@Shared': path.resolve(__dirname, './src/@Shared'),
        '@Assets': path.resolve(__dirname, './src/@Assets'),
    }
  },
};