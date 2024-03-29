import i18nextConfig from './next-i18next.config.js'

const {i18n} = i18nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n
};

export default nextConfig;
