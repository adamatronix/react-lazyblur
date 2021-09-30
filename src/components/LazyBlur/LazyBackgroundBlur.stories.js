import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useMediaQuery } from 'react-responsive'
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

export const Responsive = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 900px)'
  })

  return (
    <div style={{width: '100%', height: '100vh'}}>
      { isDesktop ? <LazyBackgroundBlur key={uuidv4()} src={imageOne} placeholder={imageOneBlur}></LazyBackgroundBlur> : 
      <LazyBackgroundBlur key={uuidv4()} src={imageTwo} placeholder={imageTwoBlur}></LazyBackgroundBlur> }
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