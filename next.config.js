/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
images:{
  domains: ["image.tmdb.org", "links.papareact.com"]
}
}

module.exports = nextConfig
