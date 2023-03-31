import React from 'react';
import './Contact.model.css';
import { useLanguage } from '../../store/LanguageContext';

const Contact = () => {
    const language = useLanguage();
  return (
    <section className='Contact' id='Contact'>
        <h1>{language ? 'Contact' : 'Kapcsolat'}</h1>
    </section>
  )
}

export default Contact