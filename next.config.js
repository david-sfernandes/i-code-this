/** @type {import('next').NextConfig} */
const nextConfig = {
  // add allowed domains for images
  images: {
    domains: ['localhost', 'res.cloudinary.com', 'upload.wikimedia.org'],
  },
}

module.exports = nextConfig
