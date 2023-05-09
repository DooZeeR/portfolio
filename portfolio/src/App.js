import React from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Introduction from './components/Layout/Introduction';
import Education from './components/Layout/Education';
import Skills from './components/Layout/Skills';
import Contact from './components/Layout/Contact';
import { LanguageProvider } from './store/LanguageContext';

export default function App() {


  return (
    <LanguageProvider>
      <div className='App'>
        <Header/>
        <Introduction/>
        <Education/>
        <Skills/>
        <Contact/>
      </div>
    </LanguageProvider>
  );
}


