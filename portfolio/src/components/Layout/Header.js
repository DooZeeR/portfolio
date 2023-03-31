import React, {useState} from 'react';
import { useLanguage, useToggleLanguage } from '../../store/LanguageContext';
import './Header.model.css';



const Header = () => {
  const language = useLanguage();
  const toggleLanguage = useToggleLanguage();
  const [isActive, setIsActive] = useState('Introduction');

  const Introduction = () => {
    setIsActive('Introduction');
    console.log(isActive);
  }
  const Education = () => {
    setIsActive('Education');
    console.log(isActive);
  }
  const Skills = () => {
    setIsActive('Skills');
    console.log(isActive);
  }
  const Contact = () => {
    setIsActive('Contact');
    console.log(isActive);
  }
  return (
    <nav className='header'>
        <h1>{language ? 'Zsolt Farkas' : 'Farkas Zsolt'}</h1>
        <a 
          href='#Introduction' 
          onClick={Introduction} 
          className={isActive === 'Introduction' ? 'active' : ''}>
          {language ? 'Introduction' : 'Bemutatkozás'}
        </a>
        <a 
          href='#Education' 
          onClick={Education} 
          className={isActive === 'Education' ? 'active' : ''}>
          {language ? 'Education' : 'Oktatás'}
        </a>
        <a 
          href='#Skills' 
          onClick={Skills} 
          className={isActive === 'Skills' ? 'active' : ''}>
          {language ? 'Skills' : 'Képességek'}
        </a>
        <a 
          href='#Contact' 
          onClick={Contact} 
          className={isActive === 'Contact' ? 'active' : ''}>
          {language ? 'Contact' : 'Kapcsolat'}
        </a>
        <button className='btn-lng' onClick={toggleLanguage}>
            {language ? 'Hu' : 'En'}
        </button>
    </nav>
  )
}

export default Header