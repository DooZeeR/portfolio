import React from 'react'
import { useLanguage } from '../../store/LanguageContext';
const Introduction = () => {
    const language = useLanguage();
  return (
    <div>
        <h1>{language ? 'Introduction' : 'Bemutatkozás'}</h1>
    </div>
  )
}

export default Introduction