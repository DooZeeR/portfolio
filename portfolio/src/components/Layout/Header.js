import React, {useState} from 'react';
import { useLanguage, useToggleLanguage } from '../../store/LanguageContext';
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu';
import { HiX } from '@react-icons/all-files/hi/HiX';
import './Header.model.css';




const Header = () => {
  const language = useLanguage();
  const toggleLanguage = useToggleLanguage();
  const [isActive, setIsActive] = useState('Introduction');
  const [isHidden, setIsHidden] = useState(true);

 
  const Introduction = () => {
    setIsActive('Introduction');
    setIsHidden(true);
  }
  const Education = () => {
    setIsActive('Education');
    setIsHidden(true);
  }
  const Skills = () => {
    setIsActive('Skills');
    setIsHidden(true);
  }
  const Contact = () => {
    setIsActive('Contact');
    setIsHidden(true);
  }
  const showDropdownMenu = () => {
    setIsHidden(!isHidden);
  }
  return (
    <>
      <nav className='navbar'>
        <div className='logo'>{language ? 'Zsolt Farkas' : 'Farkas Zsolt'}</div>
        <ul className='links'>
          <li>
            <a 
              href='#Introduction' 
              onClick={Introduction} 
              className={isActive === 'Introduction' ? 'active' : ''}>
              {language ? 'Introduction' : 'Bemutatkozás'}
            </a>
          </li>
          <li>
            <a 
              href='#Education' 
              onClick={Education} 
              className={isActive === 'Education' ? 'active' : ''}>
              {language ? 'Education' : 'Oktatás'}
            </a>
          </li>
          <li>
            <a 
              href='#Skills' 
              onClick={Skills} 
              className={isActive === 'Skills' ? 'active' : ''}>
              {language ? 'Skills' : 'Képességek'}
            </a>
          </li>
          <li>
            <a 
              href='#Contact' 
              onClick={Contact}  
              className={isActive === 'Contact' ? 'active' : ''}>
              {language ? 'Contact' : 'Kapcsolat'}
            </a>
          </li>
        </ul>
        <button className='btn-lng' onClick={toggleLanguage}>
            {language ? 'Hu' : 'En'}
        </button>
        <div className='btn-ham' onClick={showDropdownMenu}>
          {isHidden ? <GiHamburgerMenu /> : <HiX />}
        </div>
      </nav>

      <div className={`${'dropdown_menu'} ${isHidden ? ' hidden' : ''}`}>
        <ul className='lk'>
          <li>
            <a 
              href='#Introduction' 
              onClick={Introduction} 
              className={isActive === 'Introduction' ? 'active' : ''}>
              {language ? 'Introduction' : 'Bemutatkozás'}
            </a>
          </li>
          <li>
            <a 
              href='#Education' 
              onClick={Education} 
              className={isActive === 'Education' ? 'active' : ''}>
              {language ? 'Education' : 'Oktatás'}
            </a>
          </li>
          <li>
            <a 
              href='#Skills' 
              onClick={Skills} 
              className={isActive === 'Skills' ? 'active' : ''}>
              {language ? 'Skills' : 'Képességek'}
            </a>
          </li>
          <li>
            <a 
              href='#Contact' 
              onClick={Contact} 
              className={isActive === 'Contact' ? 'active' : ''}>
              {language ? 'Contact' : 'Kapcsolat'}
            </a>
          </li>
          <li>
            <button className='btn-ddown-lng' onClick={toggleLanguage}>
              {language ? 'Hungary' : 'English'}
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Header