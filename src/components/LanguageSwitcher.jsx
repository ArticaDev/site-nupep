import React, { useState } from "react";
import { US, BR } from "country-flag-icons/react/3x2";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(() => {
    const localLanguage = localStorage.getItem("language");
    return localLanguage ? localLanguage : "pt-BR";
  });

  const READABLE_LANGUAGE_NAMES = {
    "pt-BR": "Português",
    en: "English",
  };

  const handleLanguageChange = () => {
    setLanguage((prevLanguage) => {
      const newLanguage = prevLanguage === "pt-BR" ? "en" : "pt-BR";
      i18n.changeLanguage(newLanguage);
      localStorage.setItem("language", newLanguage);
      localStorage.setItem("i18nextLng", newLanguage);
      return newLanguage;
    });
    window.location.reload();
  };

  return (
    <>
      <button
        onClick={handleLanguageChange}
        className="mx-auto mt-6 flex items-center space-x-2 
      rounded-md border border-transparent border-stone-900 bg-transparent px-4 py-2 text-sm font-medium text-white
       focus:outline-none focus:ring-2 focus:ring-offset-2  md:mx-0 md:mt-0
      "
      >
        {language === "pt-BR" ? (
          <BR className="h-4 w-4" />
        ) : (
          <US className="h-4 w-4" />
        )}
        <span className="text-black">{READABLE_LANGUAGE_NAMES[language]}</span>
      </button>
    </>
  );
};

export default LanguageSwitcher;
