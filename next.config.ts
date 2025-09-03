import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'webandcrafts.com',
          pathname: '/_next/image/**',
        },
        {
          protocol: 'https',
          hostname: 'cdn-icggj.nitrocdn.com',
          pathname: '/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/**',
        },
        {
          protocol: 'https',
          hostname: 'www.extwebtech.com',
          pathname: '/wp-content/uploads/**',
        },
        {
          protocol: 'https',
          hostname: 's3.eu-west-2.amazonaws.com',
          pathname: '/images.wiredmedia.co.uk/wp-content/uploads/**',
        },
        {
          protocol: 'https',
          hostname: 'assets.enterprisestorageforum.com',
          pathname: '/uploads/**',
        },
        {
          protocol: 'https',
          hostname: 'www.mindinventory.com',
          pathname: '/blog/wp-content/uploads/**',
        },
        {
          protocol: 'https',
          hostname: 'img.freepik.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 't4.ftcdn.net',
          pathname: '/jpg/**',
        },
        {
          protocol: 'https',
          hostname: 'admin.wac.co',
          pathname: '/uploads/**',
        },
      ],
    },
  };

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
export default nextConfig;
