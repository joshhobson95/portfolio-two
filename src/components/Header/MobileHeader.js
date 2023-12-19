import React, { useState, useEffect } from 'react';
import './MobileHeader.css';
import { NavLink } from 'react-router-dom';

function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  // Toggle menu on button click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <div className='mobile_header_outer'>
      <div className={`menu-container ${isMenuOpen ? 'open' : ''}`}>

        <nav id="mobile-menu">
          <ul>
            <li>
              <NavLink to='/' onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/skills' onClick={toggleMenu}>
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to='/projects' onClick={toggleMenu}>
                Projects
              </NavLink>
            </li>
          </ul>
        </nav>

        <button id="toggle-menu" className={isMenuOpen ? 'open' : ''} onClick={toggleMenu}>
  {isMenuOpen ? '' : 'Open'}
</button>

      </div>
    </div>
  );
}

export default MobileHeader;
