/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable SWC for specific configurations if required
    compiler: {
      styledComponents: true, // Enables support for styled-components
      reactRemoveProperties: true, // Strips React properties for smaller bundle size
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      });
      return config;
    },
  };
  
  export default nextConfig;