import React from 'react'
import { useLanguage } from '../../store/LanguageContext';
const Education = () => {
    const language = useLanguage();
  return (
    <div>
        <h1>{language ? 'Education' : 'Oktatás'}</h1>
    </div>
  )
}

export default Education