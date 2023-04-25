import styles from "./Thailand.module.scss";
import Header from "../../Header/Header";
import clock from "./images/VectorClock.svg";
import star from "./images/Vector (Stroke).svg";
import Coin from "./images/Vector1.svg";
import location from "./images/Vector.svg";
import thailand from "./images/Ellipse 4.svg";
import london from "./images/Ellipse 5.svg";
import india from "./images/Ellipse 6.svg";
import Blacklocation from "./buttonimg/Vector1.svg"
import shop from "./buttonimg/Vector2.svg"
import guest from "./buttonimg/Vector.svg"
import layer from "./buttonimg/layer.svg"
import OVERLAY from "./buttonimg/OVERLAY COLOR.svg"
import AliceCarousel from "react-alice-carousel";
import classNames from "classnames";
import Slider from "react-slick";

function Thailand() {
  const DisableDots = ( 
    <button  className={classNames(styles.DisableDots, styles.Dots)}> 
   
    </button> 
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }


  return (
    <section className={styles.Thailand}>
      <Header/>
      {/* <div className={styles.next}> */}
    
      <div className={styles.centertext}>
        <a>NEW TOUR</a>
        <h2>Thailand Tour</h2>
        <div className={styles.resultcard}>
          <div className={styles.days}>
            <img src={Coin} alt="" />
            <p>3 days 2 nights</p>
          </div>
          <div className={styles.stars}>
            <img src={star} alt="" />
            <p>4.8 reviews</p>
          </div>
          <div className={styles.money}>
          <img src={clock} alt="" />
          <p>Starting at $69</p>
          </div>
        </div>
        <button>Book Now</button>
      </div>
      <div className={styles.RightText}>
        <div className={styles.Card}>
          <img src={thailand} alt="" />
          <div className={styles.content}>
            <h1>Thailand</h1>
            <div className={styles.Asia}>
            <img src={location} alt="" />
            <p>Asia</p>
            </div>
          </div>
        </div>
        <div className={styles.Card}>
          <img src={london} alt="" />
          <div className={styles.content}>
            <h1>London</h1>
            <div className={styles.Asia}>
            <img src={location} alt="" />
            <p>Europe</p>
            </div>
          </div>
        </div>
        <div className={styles.Card}>
          <img src={india} alt="" />
          <div className={styles.content}>
            <h1>India</h1>
            <div className={styles.Asia}>
            <img src={location} alt="" />
            <p>Asia</p>
            </div>
          </div>
        </div>
      </div>
      
     
       <div className={styles.UnderSearch} >
         <input className={styles.WhereWe} type="text" placeholder="Where we go?" />
        <img src={layer} className={styles.layer} alt="" />
        <input className={styles.DepDay} type="text" placeholder="Departure day"/>
         <img src={layer} className={styles.layer} alt="" />
        <input className={styles.Guests}  type="text" placeholder="Guests"/>
        <button><img src={OVERLAY} alt="Guests" /></button>
       </div>
  </section>
  );
}

export default Thailand;
