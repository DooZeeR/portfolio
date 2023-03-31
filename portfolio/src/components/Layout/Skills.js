import React from 'react';
import './Skills.model.css';
import { useLanguage } from '../../store/LanguageContext';
const Skills = () => {
    const language = useLanguage();
  return (
    <section className='Skills' id='Skills'>
        <h1>{language ? 'Skills' : 'Képességek'}</h1>
    </section>
  )
}

export default Skills