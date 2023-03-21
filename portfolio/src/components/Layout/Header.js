import React from 'react';
import { useLanguage, useToggleLanguage } from '../../store/LanguageContext';



const Header = () => {
  const language = useLanguage();
  const toggleLanguage = useToggleLanguage();
  return (
    <div>
        <h1>{language ? 'English' : 'Magyar'}</h1>
        <button onClick={toggleLanguage}>
            {language ? 'Hu' : 'En'}
        </button>
    </div>
  )
}

export default Header