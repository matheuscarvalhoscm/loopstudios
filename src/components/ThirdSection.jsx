import React from 'react';
import images from '../utils/images';

function ThirdSection() {
  return (
    <section className='third-section-container'>
      <h2 className='third-section-title'>OUR CREATIONS</h2>
      { images.map(({ image, text }, index) => (
        <div 
          className='image-container'
          style={ { backgroundImage:`url(${image})`} }
          key={ index }
        >
          <p className='third-section-text'>{ text }</p>
        </div>
        )) }
      <button className='third-section-button' type='button'>
        SEE ALL
      </button>
    </section>
  );
};

export default ThirdSection;
