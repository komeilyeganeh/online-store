import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ENJson from "./en/translation.json";
import FAJson from "./fa/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
        translation: ENJson
    },
    fa: {
        translation: FAJson
    },
  },
  lng: localStorage.getItem("lng-online-store") ?? "en",
});

export default i18n;
