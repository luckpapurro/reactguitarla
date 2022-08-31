/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: false,
   images: { domains: ['res.cloudinary.com'] }, // linea agregada
   swcMinify: true,
}

module.exports = nextConfig
