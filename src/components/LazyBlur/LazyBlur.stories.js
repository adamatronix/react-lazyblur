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
          "medium_large": 'https://images.prismic.io/adamatronix/268a9aba-ce78-488e-aeeb-622fc8e587cf_20201219_DevHynes_00203.jpeg?auto=compress,format',
          "medium_large-height": 2099,
          "medium_large-width": 1400,
          "preload": 'https://images.prismic.io/adamatronix/268a9aba-ce78-488e-aeeb-622fc8e587cf_20201219_DevHynes_00203.jpeg?auto=compress,format&w=50&blur=50&q=10',
          "preload-height": 72,
          "preload-width": 48
      }
  }
};

const ImageDataTwo = {
  image: {
      sizes: {
          "medium_large": 'https://images.prismic.io/adamatronix/c1e1365f-6e9c-4f2f-aecf-0b19110b97af_20201219_DevHynes_00215.jpeg?auto=compress,format',
          "medium_large-height": 1420,
          "medium_large-width": 947,
          "preload": 'https://images.prismic.io/adamatronix/c1e1365f-6e9c-4f2f-aecf-0b19110b97af_20201219_DevHynes_00215.jpeg?auto=compress,format&w=50&blur=50&q=10',
          "preload-height": 72,
          "preload-width": 48
      }
  }
};

const ImageDataThree = {
  image: {
      sizes: {
          "medium_large": 'https://images.prismic.io/adamatronix/f5031b85-4731-4078-a192-5d319ba5603d_Blood-Orange-billboard.jpeg?auto=compress,format',
          "medium_large-height": 969,
          "medium_large-width": 1717,
          "preload": 'https://images.prismic.io/adamatronix/f5031b85-4731-4078-a192-5d319ba5603d_Blood-Orange-billboard.jpeg?auto=compress,format&w=50&blur=50&q=10',
          "preload-height": 72,
          "preload-width": 48
      }
  }
};

export const Default = () => {
  return (
    <>
    <div style={{position: 'relative', display: 'grid', gridColumnGap: '30px', gridTemplateColumns: 'repeat(12,1fr)'}}>
      <div style={{gridColumn: '6 / span 6'}}>
        <LazyBlur 
          placeholder={ImageData.image.sizes['preload']} 
          placeholderWidth={ImageData.image.sizes['medium_large-width']} 
          placeholderHeight={ImageData.image.sizes['medium_large-height']}>
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
    <div style={{position: 'relative', margin: '800px 0', display: 'grid', gridColumnGap: '30px', gridTemplateColumns: 'repeat(12,1fr)'}}>
      <div style={{gridColumn: '1 / span 12'}}>
        <LazyBlur 
          placeholder={ImageDataThree.image.sizes['preload']} 
          placeholderWidth={ImageDataThree.image.sizes['medium_large-width']} 
          placeholderHeight={ImageDataThree.image.sizes['medium_large-height']}>
            <img style={{width: "100%"}} src={ImageDataThree.image.sizes['medium_large']} />
        </LazyBlur>
      </div>
    </div>
    <div style={{position: 'relative', margin: '800px 0', display: 'grid', gridColumnGap: '30px', gridTemplateColumns: 'repeat(12,1fr)'}}>
      <div style={{gridColumn: '4 / span 6'}}>
        <LazyBlur 
          placeholder={ImageData.image.sizes['preload']} 
          placeholderWidth={ImageData.image.sizes['medium_large-width']} 
          placeholderHeight={ImageData.image.sizes['medium_large-height']}>
            <img style={{width: "100%"}} src={ImageData.image.sizes['medium_large']} />
        </LazyBlur>
      </div>
    </div>
    </>
  );
}