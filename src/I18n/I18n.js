import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from "react-i18next";
i18next
.use(LanguageDetector)
.use(initReactI18next).init({
    debug: true,
    fallbackLng: 'uz',
    resources: {
        en: {
            translation: {
                aboutProject:'About Project',
                placedLocation:'Placed location'
            }
        },
        uz: {
            translation: {
                aboutProject:'Loyiha haqida',
                placedLocation:'Placed Location'
            }
        }
    }
})