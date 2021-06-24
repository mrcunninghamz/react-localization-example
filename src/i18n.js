import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
        en: {
         translation: {
           home : {
              welcome : "Welcome to React and react-i18next",
              edit : "Edit <1>src/App.js</1> and save to reload.",
              learn: "Learn React"
           }
         }
       },
       fr: {
         translation: {
          home : {
             welcome : "Bienvenue à React et react-i18next",
             edit : "Modifier <1>src/App.js</1> et enregistrer pour recharger.",
             learn: "Apprendre Réagir"
          }
         }
       }
    }
  });

export default i18n;