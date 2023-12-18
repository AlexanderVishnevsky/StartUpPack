/**
 * @type {import('next').NextConfig}
 */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});
const nextTranslate = require('next-translate-plugin');

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
        localeDetection: false,
    },
};

if (process.env.NODE_ENV !== 'development') {
    nextConfig.compiler = {
        removeConsole: {
            exclude: ['warn', 'error'],
        },
    };
    nextConfig.eslint = {
        ignoreDuringBuilds: false,
    };
}
const plugins = () => {
    const plugins = [withBundleAnalyzer];
    return plugins.reduce((acc, next) => next(acc), {
        webpack(config) {
            config.module.rules.push({
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            prettier: true,
                            svgo: true,
                            icon: true,
                        },
                    },
                ],
            });
            return config;
        },
        ...nextConfig,
    });
};

module.exports = nextTranslate(plugins());
