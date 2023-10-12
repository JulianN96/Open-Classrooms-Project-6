import React from 'react';
import { useState } from 'react';

export default function ImageCarousel(props) {
  const imageArray = props.pictures;
  let [imageIndex, setImageIndex] = useState(0);
  let [currentImage, setCurrentImage] = useState(imageArray[imageIndex]);

  function imageFwd() {
    if (
      imageIndex === imageArray.length - 1 ||
      imageIndex > imageArray.length
    ) {
      setImageIndex(0);
      setCurrentImage(imageArray[0]);
    } else if (imageIndex < imageArray.length) {
      setImageIndex(imageIndex + 1);
      setCurrentImage(imageArray[imageIndex + 1]);
    }
    
  }

  function imageBack() {
    if (imageIndex === 0 || imageIndex > imageArray.length) {
      setImageIndex(imageArray.length - 1);
      setCurrentImage(imageArray[imageArray.length - 1]);
    } else if (imageIndex < 0 || imageIndex < imageArray.length) {
      setImageIndex(imageIndex - 1);
      setCurrentImage(imageArray[imageIndex - 1]);
    }
    
  }

  return (
    <div className='imageCarousel'>
      <div
        className='imageCarousel'
        style={{
          backgroundImage: `url(${currentImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {imageArray.length > 1 && (
          <div className='imageCarousel__controlsContainer'>
            <svg
              className='imageCarousel__prev'
              onClick={imageBack}
              xmlns='http://www.w3.org/2000/svg'
              width='48'
              height='80'
              viewBox='0 0 48 80'
              fill='none'
            >
              <path
                d='M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z'
                fill='white'
              />
            </svg>
            <div className='imageCarousel__counter'>
              {imageIndex + 1}/{imageArray.length}
            </div>
            <svg
              className='imageCarousel__next'
              onClick={imageFwd}
              xmlns='http://www.w3.org/2000/svg'
              width='48'
              height='80'
              viewBox='0 0 48 80'
              fill='none'
            >
              <path
                d='M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z'
                fill='white'
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
