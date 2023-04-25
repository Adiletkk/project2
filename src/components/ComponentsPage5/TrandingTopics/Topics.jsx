import styles from "./Topics.module.scss";
import styles2 from "./Tropick.css"
import Vector from "./Images/OVERLAY COLOR.svg";
import VectorLeft from "./Images/OVERLAYCOLOR.svg";
import classNames from "classnames";
import AliceCarousel from "react-alice-carousel";
import Slider from "react-slick";
import SlideAdaptive from "./Slider/Slider";

function Topics() {
  const nextButton = (
    <button
      className={classNames(styles.customNextButton, styles.sliderButton)}
    >
      <span classNames="visually-hidden">
        <img src={Vector} alt="" width="12px" />
      </span>
    </button>
  );
  const prevButton = (
    <button
      className={classNames(styles.customPrevButton, styles.sliderButton)}
    >
      <span classNames="visually-hidden">
        <img src={VectorLeft} alt="" width="12px" />
      </span>
    </button>
  );


  return (
    <section className={styles.Topics}>
      <h1>Trending Topics</h1>
      <AliceCarousel className={styles.alice}
        renderNextButton={() => nextButton}
        renderPrevButton={() => prevButton}
        disableDotsControls={true}
      >
        <div className={styles.Cards}>
          <div className={styles.CardOne}>
            <p>Travel</p>
            <a>12 posts</a>
          </div>
          <div className={styles.CardTwo}>
            <p>Business</p>
            <a>26 posts</a>
          </div>
          <div className={styles.CardThree}>
            <p>Marketing</p>
            <a>16 post2</a>
          </div>
          <div className={styles.CardFour}>
            <p>Sports</p>
            <a>26 posts</a>
          </div>
        </div>
        <div className={styles.Cards}>
          <div className={styles.CardOne}>
            <p>Travel</p>
            <a>12 posts</a>
          </div>
          <div className={styles.CardTwo}>
            <p>Business</p>
            <a>26 posts</a>
          </div>
          <div className={styles.CardThree}>
            <p>Marketing</p>
            <a>16 post2</a>
          </div>
          <div className={styles.CardFour}>
            <p>Sports</p>
            <a>26 posts</a>
          </div>
        </div>
        <div className={styles.Cards}>
          <div className={styles.CardOne}>
            <p>Travel</p>
            <a>12 posts</a>
          </div>
          <div className={styles.CardTwo}>
            <p>Business</p>
            <a>26 posts</a>
          </div>
          <div className={styles.CardThree}>
            <p>Marketing</p>
            <a>16 post2</a>
          </div>
          <div className={styles.CardFour}>
            <p>Sports</p>
            <a>26 posts</a>
          </div>
        </div>
      </AliceCarousel>
      <SlideAdaptive/>
    </section>
 
  
    
  );
}
export default Topics;
