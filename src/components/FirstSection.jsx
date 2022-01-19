import React from 'react';

import logo from '../images/logo.svg';

function FirstSection() {
  return(
    <section className='first-section-container'>
      <header className='header'>
        <img
          className='logo-image'
          src={ logo } 
          alt='Loopstudios'
        />
        <div className='hamburguer-menu'>
          <span className='bar'/>
          <span className='bar'/>
          <span className='bar'/>
        </div>
      </header>
      <div className='first-section'>
        <p className='first-section-text'>
          IMMERSIVE EXPERIENCES THAT DELIVER
        </p>
      </div>
    </section>
  );
};

export default FirstSection;
