import React, { useContext, useState } from 'react';

const LanguageContext = React.createContext();
const LanguageChangeContext = React.createContext();

export function useLanguage() {
  return useContext(LanguageContext);
}
export function useToggleLanguage() {
  return useContext(LanguageChangeContext);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(false);

  const toggleLanguage = () => {
    setLanguage(!language);
  };

  return (
    <LanguageContext.Provider value={language}>
      <LanguageChangeContext.Provider value={toggleLanguage}>
        {children}
      </LanguageChangeContext.Provider>
    </LanguageContext.Provider>
  )
};


