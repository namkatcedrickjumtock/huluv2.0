/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
images:{
  domains: ["image.tmdb.org", "links.papareact.com",'unsplash.com']
}
}

module.exports = nextConfig
