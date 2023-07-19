import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from './i18n/en.json';
import ptBR from './i18n/pt-BR.json';

const resources = {
  'pt-BR': ptBR,
  en,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lng',
      lookupCookie: 'language',
      lookupLocalStorage: 'language',
      lookupSessionStorage: 'language',
      caches: ['localStorage'],
      excludeCacheFor: ['cimode'],
    }
  });

export default i18n;