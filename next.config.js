/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    // loader: "custom",
    // loaderFile: "./my/image/loader.js",
    unoptimized: true,
    domains: ['https://diegomarulanda.vercel.app/'],
  },
  pageExtensions: ['page.tsx', 'page.ts', 'route/tsx', 'route.ts', 'tsx'],
}

module.exports = nextConfig
