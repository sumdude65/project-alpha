/** @type {import('next').NextConfig} */
/**
 * The images config here allows nextjs to permit fetching images from remote sources defined in the remotePatterns array
 */

const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
            pathname: '/images/**',
          },
        ],
      },
};

export default nextConfig;
