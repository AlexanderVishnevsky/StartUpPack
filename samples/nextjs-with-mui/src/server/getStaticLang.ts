import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticPaths, GetStaticProps } from 'next';

import i18nextConfig from '../../next-i18next.config';

export const getI18nPaths = () =>
    i18nextConfig.i18n.locales.map((lng) => ({
        params: {
            slug: 'folder',
            locale: lng,
        },
    }));

export const getStaticPaths: GetStaticPaths = () => ({
    fallback: false,
    paths: getI18nPaths(),
});

export const getI18nProps = async (locale: string, ns: string[]) => {
    return {
        ...(await serverSideTranslations(locale, ns)),
    };
};

export const makeStaticProps =
    (ns: string[] = ['common']): GetStaticProps =>
    async ({ locale = 'en' }: { locale?: string }) => ({
        props: await getI18nProps(locale, ns),
    });
