/**
 * @type {import('next').NextConfig}
 */
require('dotenv').config()

const nextConfig = {
  basePath: "",
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL
  }
};

module.exports = nextConfig;
