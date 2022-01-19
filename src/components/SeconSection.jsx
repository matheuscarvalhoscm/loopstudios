import React from 'react';
import image from '../images/mobile/image-interactive.jpg';

function SecondSection() {
  return (
    <section className='second-section-container'>
      <img
        className='second-section-image'
        src={image}
        alt='virtual reality player'
      />
      <div className='second-section-text-box'>
        <h2 className='second-section-title'>THE LEADER IN INTERACTIVE VR</h2>
        <p className='second-section-text'>
          Founded in 2011, Loppstudios has been producing world-class virtual
          reality projects for som of the best companies around the globe. Our
          award-winning creations gave transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
}

export default SecondSection;
