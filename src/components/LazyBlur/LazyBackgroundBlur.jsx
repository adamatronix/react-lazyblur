import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import LazyLoad from 'react-lazyload';
import { Transition } from 'react-transition-group';

const LazyBackgroundBlur = props => {
    const [Loaded, setLoaded] = useState(false);
    const { placeholder, className, src, offset, children} = props;
    const duration = 200;

    var classesImage = classNames(className);

    const defaultStyle = {
        background: `url("${src}") center center no-repeat`,
        backgroundSize: "cover",
        transition: `opacity ${duration}ms ease`,
        opacity: 0,
        height: "100%",
        width: "100%"
      }
      
    const transitionStyles = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
    };
    
    let wrapperStyles = {
        position: "relative",
        width: "100%",
        height: '100%',
        overflow: "hidden"
    };

    let placeholderStyles = {
        opacity: 1,
    };

    const placeholderTransitionStyles = {
        entering: { opacity: 1 },
        entered:  { opacity: 0 },
        exiting:  { opacity: 1 },
        exited:  { opacity: 1 },
        };


    const onLoad =(e) => {
      setLoaded(true);
    }
    

    return (
        <Transition in={Loaded} timeout={duration}>
        {state => ( <div style={wrapperStyles} className={classesImage}>
            <ImagePlaceholder style={{
                    ...placeholderStyles,
                    ...placeholderTransitionStyles[state]
                }} src={placeholder} />
                <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                  <LazyLoad offset={ (offset) ? offset : 0} once>
                    <img src={src} onLoad={onLoad} style={{position:'absolute', top: '0', left: '0', width: '100%', height: '100%', opacity: '0'}}/> 
                    { children ? children : ""}
                  </LazyLoad>
                </div>
        </div>)}  
        </Transition>
    )

}

const ImagePlaceholder = props => {
    const { src, style } = props;

    let styles = {
        background: `url("${src}") center center no-repeat`,
        backgroundSize: "cover",
        left: "0",
        top: "0",
        position: "absolute",
        width: "100%",
        height: "100%"
    };

    return (
        <React.Fragment>
            <div style={{...styles, ...style}} />
        </React.Fragment>
    )

}
export default LazyBackgroundBlur;
