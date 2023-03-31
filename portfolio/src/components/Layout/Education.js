import React from 'react';
import './Education.model.css';
import { useLanguage } from '../../store/LanguageContext';
const Education = () => {
    const language = useLanguage();
  return (
    <section className='Education' id='Education'>
        <h1>{language ? 'Education' : 'Oktatás'}</h1>
    </section>
  )
}

export default Education