import React, { useState } from 'react';
import { US, BR } from 'country-flag-icons/react/3x2'

const LanguageSwitcher = () => {
  const [language, setLanguage] =  useState(() => {
    const localLanguage = localStorage.getItem('language');
    return localLanguage ? localLanguage : 'Português';
    });

  const handleLanguageChange = () => {
    setLanguage((prevLanguage) => {
        const newLanguage = prevLanguage === 'Português' ? 'English' : 'Português'
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
      {language === 'Português' ? <BR className="w-4 h-4" /> : <US className="w-4 h-4" />}
      <span className='text-black'>{language}</span>
    </button>
    </>
  );
}

export default LanguageSwitcher;
