import React, { useContext } from 'react';
import { IoMdMoon as Moon, IoMdSunny as Sun } from 'react-icons/io';
import ThemeContext from './Theme-components/Theme-Context';

export default function Switch () {
  const { dark, toggle } = useContext(ThemeContext);
  
  return (
    <button 
      className='Switch'
      onClick={() => toggle()}
    >
        {dark && <Sun className={`icon ${!dark ? 'active' : ''}`}/>}
        {!dark && <Moon className={`icon ${dark ? 'active' : ''}`}/>}
    </button>
  );
} 