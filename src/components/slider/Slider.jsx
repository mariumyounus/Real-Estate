import React from 'react';
import './Slider.scss';
import arrow from '../Assets/arrow.png';

const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = React.useState(0);

  const changeSlide = (direction) => {
    if (direction === 'right') {
      setImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    } else {
      setImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }
  };

  return (
    <div className='slider'>
      {imageIndex !== null && (
        <div className='fullslider'>
          <div className='arrow'>
            <img
              src={arrow}
              onClick={() => changeSlide('left')}
             
              alt='Left Arrow'
            />
          </div>
          <div className='imgcontainer'>
            <img src={images[imageIndex]} alt='Slider Image' />
          </div>
          <div className='arrow'>
            <img
              src={arrow}
              onClick={() => changeSlide('right')}
              alt='Right Arrow'
              style={{ transform: 'rotate(180deg)' }}
            />
          </div>
          <div className='close' onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className='bigimage' onClick={() => setImageIndex(0)}>
        <img src={images[0]} alt='Big Image' />
      </div>
      <div className='smallimages'>
        {images.slice(1).map((image, index) => (
          <div className='smallimage' key={index} onClick={() => setImageIndex(index + 1)}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
