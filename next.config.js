/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    API_ID: process.env.API_ID,
    AUTO_DOMAIN: process.env.AUTO_DOMAIN,
    DB_URL: process.env.DB_URL,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.contentstack.io',
        port: '',
        pathname: '/v3/assets/blt731acb42bb3d1659/blta9b519e2d63be95d/640662aca8c2d41089c38bf8/lol_milio_champ_trailer_1920x1080_textless_jdiaz_v001.jpg?quality=90&crop=1%3A1&width=240',
      },
    ],
  },
}

module.exports = nextConfig
