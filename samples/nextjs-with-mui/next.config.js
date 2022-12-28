/**
 * @type {import('next').NextConfig}
 */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = () => {
    const plugins = [withBundleAnalyzer];
    return plugins.reduce((acc, next) => next(acc), {
        reactStrictMode: true,
        swcMinify: true,
        compiler: {
            removeConsole: {
                exclude: ['warn', 'error'],
            },
        },
        eslint: {
            ignoreDuringBuilds: true,
        },
    });
};
//
// const nextConfig = {
//     reactStrictMode: true,
//     swcMinify: true,
//     compiler: {
//         removeConsole: {
//             exclude: ['warn', 'error'],
//         },
//     },
//     extends: ['plugin:@next/next/recommended'],
//     eslint: {
//         ignoreDuringBuilds: true,
//     },
// };
//
// module.exports = nextConfig;
