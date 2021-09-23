import React from 'react';
import LazyBackgroundBlur from './LazyBackgroundBlur';
import imageOne from './assets/20201219_DevHynes_00136.jpeg';
import imageOneBlur from './assets/20201219_DevHynes_00136_blur.jpg';
import imageTwo from './assets/Landing_image 1@2x.jpg';
import imageTwoBlur from './assets/Landing_image 1@2x_blur.jpg';

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

export const AlternateImage = () => {
  return (
    <div style={{width: '100%', height: '80vh'}}>
      <LazyBackgroundBlur src={imageTwo} placeholder={imageTwoBlur}></LazyBackgroundBlur>
    </div>
  )
}


export const OffScreenExample = () => {
  return (
    <div style={{padding: '2000px 0 0'}}>
      <div style={{width: '100%', height: '100vh'}}>
        <LazyBackgroundBlur src={imageOne} placeholder={imageOneBlur}></LazyBackgroundBlur>
      </div>
    </div>
  )
}