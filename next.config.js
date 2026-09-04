/** @type {import('next').NextConfig} */
const nextConfig = {
  // يخفي شارة "Static route" وعلامة البرق في وضع التطوير فقط
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
};

module.exports = nextConfig;
