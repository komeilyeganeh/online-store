import i18n from "../../../locales/i18n";
import { create } from "zustand";

type Store = {
  lng: string;
  setLng: (lng: string) => void;
};

const initialState = { lng: localStorage.getItem("lng-online-store") ?? "en" };

export const useLng = create<Store>()((set) => ({
  ...initialState,
  setLng: (newLng: string) =>
    set(() => {
      i18n.changeLanguage(newLng)
      localStorage.setItem("lng-online-store", newLng);
      document.documentElement.lang = newLng;
      return { lng: newLng };
    }),
}));
