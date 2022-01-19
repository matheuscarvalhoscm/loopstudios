import React from 'react';
import { useState } from 'react';
import logo from '../images/logo.svg';

function FirstSection() {
  const navLinks = ['ABOUT', 'CAREERS', 'EVENTS', 'PRODUCTS', 'SUPPORT'];
  const [isActive, setIsActive] = useState(false);

  const mobileMenu = () => setIsActive(!isActive);

  return (
    <section 
      className={
        !isActive ? 'first-section-container': 'first-section-container-black'
      }
    >
      <header className='header'>
        <img className='logo-image' src={ logo } alt='Loopstudios' />
        <nav className='nav-bar'>
          <div
            className={ !isActive ? 'hamburger-menu' : 'hamburger-menu-active' }
            onClick={mobileMenu}
          >
            <span className='bar' />
            <span className='bar' />
            <span className='bar' />
          </div>
        </nav>
      </header>
      <ul className={ isActive ? 'nav-menu-active' : 'nav-menu' }>
        { navLinks.map((link, index) => (
          <li className='nav-item' key={ index }>
            <a className='nav-link' href='#'>
              { link }
            </a>
          </li>
        )) }
      </ul>
      <div className='first-section-hero'>
        <p
          className={
            !isActive
              ? 'first-section-hero-text'
              : 'first-section-hero-text-inactive'
          }
        >
          IMMERSIVE EXPERIENCES THAT DELIVER
        </p>
      </div>
    </section>
  );
}

export default FirstSection;
