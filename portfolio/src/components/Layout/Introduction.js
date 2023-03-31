import React from 'react';
import './Introduction.model.css';
import { useLanguage } from '../../store/LanguageContext';
const Introduction = () => {
    const language = useLanguage();
  return (
    <section className='Introduction' id='Introduction'>
        <h1>{language ? 'Introduction' : 'Bemutatkozás'}</h1>
    </section>
  )
}

export default Introduction