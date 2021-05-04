import React from 'react';
import LazyBlur from './LazyBlur';

const LazyBlurImage = (props) => {
  const { placeholder, src} = props;

  return (
    <LazyBlur
      placeholder={placeholder.src} 
      placeholderWidth={placeholder.width} 
      placeholderHeight={placeholder.height}>
        <img style={{width: "100%"}} src={src} />
    </LazyBlur>
  )
}

export default LazyBlurImage;