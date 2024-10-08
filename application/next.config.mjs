/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true, // Enable SWC minification for faster builds
    experimental: {
      fontLoaders: [
        { loader: '@next/font/google' } // Use built-in font loader if needed
      ],
    },
  };
  
  export default nextConfig;
