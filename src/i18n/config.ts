export type Locale = "es" | "en";

const dictionaries = {
  es: () => import("./locales/es").then((module) => module.es),
  en: () => import("./locales/en").then((module) => module.en),
};

export const getDictionary = async (locale: Locale) => {
  if (dictionaries[locale]) {
    return dictionaries[locale]();
  }
  return dictionaries.en();
};
