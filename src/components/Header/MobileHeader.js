import React, { useState, useEffect } from 'react';
import './MobileHeader.css';
import { NavLink } from 'react-router-dom';

function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  // Toggle menu on button click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu after 5 seconds of inactivity
  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    const handleMouseInteraction = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      if (!isMenuOpen) {
        setIsMenuOpen(true);
      }

      timeoutId = setTimeout(() => {
        setIsMenuOpen(false);
      }, 5000);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseInteraction);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseInteraction);
    };
  }, [isMenuOpen]);


  useEffect(() => {
    let timeoutId;

    if (!isMenuOpen) {
      timeoutId = setTimeout(() => {
        document.getElementById('toggle-menu').classList.add('shrink');
      }, 3000);
    } else {
      document.getElementById('toggle-menu').classList.remove('shrink');
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
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
