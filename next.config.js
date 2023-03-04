/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'localhost',
      'https://next-amit-strapi-app.herokuapp.com/',
    ],
  }
}

module.exports = nextConfig
