import { useState } from "react";
import { LanguageContext } from "./LanguageContext";

import en from "../i18n/en.json";
import es from "../i18n/es.json";
import it from "../i18n/it.json";
import fr from "../i18n/fr.json";
import pt from "../i18n/pt.json";
import ru from "../i18n/ru.json";

const languages = {
  en,
  es,
  it,
  fr,
  pt,
  ru,
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const t = (keyPath) => {
    const keys = keyPath.split(".");
    let value = languages[language];

    keys.forEach((k) => {
      value = value?.[k];
    });

    return value || keyPath;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
