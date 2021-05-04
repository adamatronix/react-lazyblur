import React from 'react';
import LazyBlur from './LazyBlur';

const LazyBlurImage = (props) => {
  const { placeholder, offset, className, src, alt} = props;

  return (
    <LazyBlur
      offset={offset}
      placeholder={placeholder.src} 
      placeholderWidth={placeholder.width} 
      placeholderHeight={placeholder.height}>
        <img style={{width: "100%"}} className={className} src={src} alt={alt}/>
    </LazyBlur>
  )
}

export default LazyBlurImage;