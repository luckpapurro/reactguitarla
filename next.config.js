/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   images: { domains: ['res.cloudinary.com'] }, // linea agregada
   swcMinify: true,
}

module.exports = nextConfig
