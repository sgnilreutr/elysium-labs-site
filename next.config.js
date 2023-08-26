/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['https://avatars.githubusercontent.com, https://githubusercontent.com, avatars.githubusercontent.com, githubusercontent.com'],
  },
}

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)
