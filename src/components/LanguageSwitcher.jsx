import React, { useState } from 'react';
import { US, BR } from 'country-flag-icons/react/3x2'
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] =  useState(() => {
    const localLanguage = localStorage.getItem('language');
    return localLanguage ? localLanguage : 'pt-BR';
    });

    const READABLE_LANGUAGE_NAMES = {
      'pt-BR': 'Português',
      'en': 'English',
    } 

  const handleLanguageChange = () => {
    setLanguage((prevLanguage) => {
        const newLanguage = prevLanguage === 'pt-BR' ? 'en' : 'pt-BR'
        i18n.changeLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
        return newLanguage;
    });
    window.location.reload();
  }

  return (
    <>
    <button 
      onClick={handleLanguageChange} 
      className="flex items-center 
      space-x-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-transparent
       focus:outline-none focus:ring-2 focus:ring-offset-2  border-stone-900
      "
    >
      {language === 'pt-BR' ? <BR className="w-4 h-4" /> : <US className="w-4 h-4" />}
      <span className='text-black'>{READABLE_LANGUAGE_NAMES[language]}</span>
    </button>
    </>
  );
}

export default LanguageSwitcher;
