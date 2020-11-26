import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import './CSS/Slideshow.css';

function Slideshow() {

    const properties = {
        duration: 3000,
        transitionDuration: 500,
        infinite: true,
        arrows: true
      }

    return (
        <div className="slideshow">
             <Slide easing="ease" {...properties} >
                <div className="each-slide">
                    <div className="slideshow_img1" />
                </div>
                <div className="each-slide">
                    <div className="slideshow_img2" />
                </div>
                <div className="each-slide">
                    <div className="slideshow_img3" />
                </div>
                <div className="each-slide">
                    <div className="slideshow_img4" />
                </div>
                <div className="each-slide">
                    <div className="slideshow_img5" />
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;
