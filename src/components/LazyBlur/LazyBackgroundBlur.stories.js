import React from 'react';
import LazyBackgroundBlur from './LazyBackgroundBlur';
import imageOne from './assets/20201219_DevHynes_00136.jpeg';
import imageOneBlur from './assets/20201219_DevHynes_00136_blur.jpg';

export default {
  title: 'LazyBackgroundBlur',
};

export const Default = () => {
  return (
    <div style={{width: '100%', height: '100vh'}}>
      <LazyBackgroundBlur src={imageOne} placeholder={imageOneBlur}></LazyBackgroundBlur>
    </div>
  )
}