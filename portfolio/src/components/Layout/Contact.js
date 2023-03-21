import React from 'react'
import { useLanguage } from '../../store/LanguageContext';
const Contact = () => {
    const language = useLanguage();
  return (
    <div>
        <h1>{language ? 'Contact' : 'Kapcsolat'}</h1>
    </div>
  )
}

export default Contact