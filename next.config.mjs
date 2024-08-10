
/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'placehold.co',
              port: '',
              pathname: '/*',
            },
          ],
    },
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default nextConfig;
