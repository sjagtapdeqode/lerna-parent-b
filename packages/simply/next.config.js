const withTM = require("next-transpile-modules")(["@sdf/lerna-share-1"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withTM(nextConfig);
