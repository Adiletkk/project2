import Slider from "react-slick";
import styles from "./Slider.module.scss"
import glob from "../../TopHighlights/glob/glob.css"
import React, { Component } from "react";
import right from "./imgright/OVERLAYrightCOLOR.svg"
import left from "../../TrandingTopics/Images/OVERLAY COLOR.svg"
export default class SlideAdaptive extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={styles.rightimg}
            style={{
                  
                 display: "block", 
                 background: "none" 
                 
                }}
            onClick={onClick}> <img src={left} alt="" /> </div>
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={styles.leftimg}
            style={{ ...style, display: "block", background: "none" }}
            onClick={onClick}> <img  src={right} alt="" /> </div>
        );
      }
    return (
    
      
<Slider
 className={styles.slider}
  {...settings}  
  nextArrow={<SampleNextArrow />}
  prevArrow={<SamplePrevArrow />}>

             <div className={styles.CardOne2} >
            <p>Travel</p>
            <a>12 posts</a>
             </div>
             <div className={styles.CardTwo3} >
            <p>Business</p>
            <a>26 posts</a>
             </div>
             <div className={styles.CardThree4} >
            <p>Marketing</p>
            <a>16 post2</a>
             </div>
             <div className={styles.CardFour5} >
            <p>Sports</p>
            <a>26 posts</a>
             </div> 
             
    </Slider>
    );
    } 
}
