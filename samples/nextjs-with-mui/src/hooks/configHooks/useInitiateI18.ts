import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from '@media/locales';
const useInitiateI18 = () => {
    i18next.use(initReactI18next).init({
        resources: {
            en: resources.en,
        },
        lng: 'en',
        fallbackLng: 'en',
        ns: ['main'],
        interpolation: {
            escapeValue: false,
        },
    });
};

export default useInitiateI18;
