import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import { Transition } from 'react-transition-group';
import classNames from 'classnames/bind';

const LazyBlur = props => {
    const [Loaded, setLoaded] = useState(false);
    const [childrenEl, setChildren] = useState(false);
    const { placeholder, placeholderWidth, placeholderHeight, offset, children} = props;
    const duration = 200;

    const defaultStyle = {
        opacity: 1
      }
    
    let ratio = (placeholderHeight / placeholderWidth) * 100;

    let wrapperStyles = {
        position: "relative",
        width: "100%",
        paddingBottom: ratio + "%",
        overflow: "hidden"
    };

    let placeholderStyles = {
        transition: `opacity ${duration}ms ease`,
        opacity: 1,
    };

    const placeholderTransitionStyles = {
        entering: { opacity: 1 },
        entered:  { opacity: 0 },
        exiting:  { opacity: 1 },
        exited:  { opacity: 1 },
        };

    useEffect(() => {
        let childrenCopies = React.Children.map(children, item => {

            let compName = item.type.name;
            let classes, props, imageprops;

            let newStyles = {position: 'absolute', left: '0px', top: '0px'};

            classes = classNames(item.props.className);
            props = { ...item.props, className: classes, onLoad: onLoad, style: {...item.props.style, ...newStyles} };
            
            return React.cloneElement(item, props);
        });
        setChildren(childrenCopies);

    }, []);


    function onLoad() {
        setLoaded(true);
    }
    
    return (
        <Transition in={Loaded} timeout={duration}>
        {state => {
          return ( <div style={wrapperStyles}>
                      <ImagePlaceholder style={{
                              ...placeholderStyles,
                              ...placeholderTransitionStyles[state]
                          }} src={placeholder} />
                      <LazyLoad offset={ (offset) ? offset : 0} once>
                          <div style={defaultStyle}>
                              { childrenEl ? childrenEl : ""}
                          </div>
                            
                      </LazyLoad>
                  </div> ) 
        } 
        }  
        </Transition>
    )

}

const ImagePlaceholder = props => {
    const { src, style } = props;

    let styles = {
        left: "0",
        top: "0",
        position: "absolute",
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1
    };

    return (
        <React.Fragment>
            <img style={{...styles, ...style}} src={src} />
        </React.Fragment>
    )

}
export default LazyBlur;
