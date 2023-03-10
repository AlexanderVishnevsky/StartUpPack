const path = require('path');

module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
        localeDetection: false,
    },
    fallbackLng: {
        default: ['en'],
    },
    nonExplicitSupportedLngs: true,
    localePath: path.resolve('./public/locales'),
    reloadOnPrerender: process.env.NODE_ENV === 'development',
};
