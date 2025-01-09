/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "superlifebioindonesia.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
