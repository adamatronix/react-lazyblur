import React from 'react';
import LazyBlur from './LazyBlur';
import imageOne from './assets/20201219_DevHynes_00055.jpeg';
import imageOneBlur from './assets/20201219_DevHynes_00055_blur.jpg';
import imageTwo from './assets/20201219_DevHynes_00081.jpeg';
import imageTwoBlur from './assets/20201219_DevHynes_00081_blur.jpg';

export default {
  title: 'LazyBlur',
};

const ImageData = {
  image: {
      sizes: {
          "medium_large": imageOne,
          "medium_large-height": 1499,
          "medium_large-width": 1000,
          "preload": imageOneBlur,
          "preload-height": 72,
          "preload-width": 48
      }
  }
};

const ImageDataTwo = {
  image: {
      sizes: {
          "medium_large": imageTwo,
          "medium_large-height": 1499,
          "medium_large-width": 1000,
          "preload": imageTwoBlur,
          "preload-height": 72,
          "preload-width": 48
      }
  }
};

export const Default = () => {
  return (
    <>
    <div style={{position: 'relative', margin: '800px 0', display: 'grid', gridColumnGap: '30px', gridTemplateColumns: 'repeat(12,1fr)'}}>
      <div style={{gridColumn: '4 / span 6'}}>
        <LazyBlur 
          placeholder={ImageData.image.sizes['preload']} 
          placeholderWidth={ImageData.image.sizes['preload-width']} 
          placeholderHeight={ImageData.image.sizes['preload-height']}>
            <img style={{width: "100%"}} src={ImageData.image.sizes['medium_large']} />
        </LazyBlur>
      </div>
    </div>
    <div style={{position: 'relative', margin: '800px 0', display: 'grid', gridColumnGap: '30px', gridTemplateColumns: 'repeat(12,1fr)'}}>
      <div style={{gridColumn: '1 / span 6'}}>
        <LazyBlur 
          placeholder={ImageDataTwo.image.sizes['preload']} 
          placeholderWidth={ImageDataTwo.image.sizes['preload-width']} 
          placeholderHeight={ImageDataTwo.image.sizes['preload-height']}>
            <img style={{width: "100%"}} src={ImageDataTwo.image.sizes['medium_large']} />
        </LazyBlur>
      </div>
    </div>
    </>
  );
}