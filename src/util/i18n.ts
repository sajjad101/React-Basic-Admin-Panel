import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import namespaces from '../../public/locales/namespaces'
console.log(namespaces)
i18n
  .use(Backend)
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: 'fa', 
    debug: true,

    interpolation: {
      escapeValue: false, 
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', 
    },
    ns: namespaces
  });

export default i18n;
