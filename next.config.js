/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
}

module.exports = nextConfig

module.exports = {
  images: {
    // loader: "custom",
    // loaderFile: "./my/image/loader.js",
    unoptimized: true,
    domains: ['https://diegomarulanda.vercel.app/'],
  },
  metadata: {
    metadataBase: 'https://diegomarulanda.vercel.app/',
  },
}
