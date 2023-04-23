import React, { Component } from "react";
import Slider from "react-slick";
import scss from './SliderTest.module.scss'
import icon from '../../assets/icon/slidericon.png'
import image from '../../assets/Image/slideimg.png' 
import left from '../../assets/icon/left.png'
import right from '../../assets/icon/right.png'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "none" }}
      onClick={onClick}> <img src={right} alt="" /> </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "none" }}
      onClick={onClick}> <img className={scss.image1} src={left} alt="" /> </div>
  );
}

export default class SliderTest extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className={scss.wrapper + " container"}>
        <Slider {...settings}>
          <div>
            <h3>
                <div className={scss.left}>
                    <h4>What Our Customer Say</h4>
                    <div className={scss.sliderText}>
                        <img src={icon} alt="" />
                        <p className={scss.txt1}>Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.</p>
                        <p className={scss.txt2}>Robert Fox</p>
                    </div>
                </div>
                <div className={scss.right}>
                    <img src={image} alt="" />
                </div>
            </h3>
          </div>
          <div>
            <h3>
            <div className={scss.left}>
                    <h4>What Our Customer Say</h4>
                    <div className={scss.sliderText}>
                        <img src={icon} alt="" />
                        <p className={scss.txt1}>Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.</p>
                        <p className={scss.txt2}>Robert Fox</p>
                    </div>
                </div>
                <div className={scss.right}>
                    <img src={image} alt="" />
                </div>
            </h3>
          </div>
          <div>
            <h3>
            <div className={scss.left}>
                    <h4>What Our Customer Say</h4>
                    <div className={scss.sliderText}>
                        <img src={icon} alt="" />
                        <p className={scss.txt1}>Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.</p>
                        <p className={scss.txt2}>Robert Fox</p>
                    </div>
                </div>
                <div className={scss.right}>
                    <img src={image} alt="" />
                </div>
            </h3>
          </div>
          <div>
            <h3>
            <div className={scss.left}>
                    <h4>What Our Customer Say</h4>
                    <div className={scss.sliderText}>
                        <img src={icon} alt="" />
                        <p className={scss.txt1}>Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.</p>
                        <p className={scss.txt2}>Robert Fox</p>
                    </div>
                </div>
                <div className={scss.right}>
                    <img src={image} alt="" />
                </div>
            </h3>
          </div>
          <div>
            <h3> 
            <div className={scss.left}>
                    <h4>What Our Customer Say</h4>
                    <div className={scss.sliderText}>
                        <img src={icon} alt="" />
                        <p className={scss.txt1}>Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.</p>
                        <p className={scss.txt2}>Robert Fox</p>
                    </div>
                </div>
                <div className={scss.right}>
                    <img src={image} alt="" />
                </div>
            </h3>
          </div>
          <div>
            <h3>
            <div className={scss.left}>
                    <h4>What Our Customer Say</h4>
                    <div className={scss.sliderText}>
                        <img src={icon} alt="" />
                        <p className={scss.txt1}>Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.</p>
                        <p className={scss.txt2}>Robert Fox</p>
                    </div>
                </div>
                <div className={scss.right}>
                    <img src={image} alt="" />
                </div>
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}