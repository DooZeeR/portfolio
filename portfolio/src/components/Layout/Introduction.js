import React from 'react';
import './Introduction.model.css';
import { useLanguage } from '../../store/LanguageContext';

const Introduction = () => {
  const language = useLanguage();

  return (
    <section className='Introduction' id='Introduction'>
        <h1>
          <span>{language ? ' Hi! \u00A0' : `Hello! \u00A0`}</span>
          <span className={language ? '' : 'span_red'}>
            {language ? ' I \u00A0' : 'Farkas \u00A0'}
          </span>
          <span className={language ? '' : 'span_red'}>
            {language ? ' am \u00A0' : 'Zsolt \u00A0'}
          </span>
          <span className={language ? 'span_red' : ''}>
            {language ? ' Zsolt \u00A0' : 'vagyok.\u00A0'}
          </span>
          <span className={language ? 'span_red' : ''}>
            {language ? ' Farkas. \u00A0' : 'Junior \u00A0'}
          </span>
          <span>{language ? 'Junior \u00A0' : 'full \u00A0'}</span>
          <span>{language ? 'frontend \u00A0' : 'stack \u00A0'}</span>
          <span>{language ? 'focused \u00A0' : 'fejlesztő. \u00A0'}</span>
          <span>{language ? 'full \u00A0' : 'Frontenben \u00A0'}</span>
          <span>{language ? 'stack \u00A0' : 'erősebb, \u00A0'}</span>
          <span>{language ? 'developer. \u00A0' : 'React, \u00A0'}</span>
          <span>{language ? 'Based \u00A0' : 'Javascript, \u00A0'}</span>
          <span>{language ? 'on \u00A0' : 'NodeJs, \u00A0'}</span>
          <span>{language ? 'React, \u00A0' : 'MongoDB \u00A0'}</span>
          <span>{language ? 'Javascript, \u00A0' : 'irányban. \u00A0'}</span>
          <span>{language ? 'NodeJs, \u00A0' : ''}</span>
          <span>{language ? 'MongoDB. \u00A0' : ''}</span>
        </h1>
    </section>
  )
}

export default Introduction