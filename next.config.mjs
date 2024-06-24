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
      experimental:{
        taint:true,
      },
      async redirects() {
        return [
          {
            source: '/blog', // The path to match
            destination: '/', // The path to redirect to
            permanent: true, // Indicates if the redirect is permanent (308) or temporary (307)
          },
        ]
      }
};

export default nextConfig;
