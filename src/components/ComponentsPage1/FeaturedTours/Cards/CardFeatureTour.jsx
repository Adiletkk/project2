import React from "react";
import styles from "./CardFeatureTour.module.scss";
import Like from "../images/Checkbox.svg";
import clock from "../images/Vector.svg";
import star from "../images/VectorStars.svg";
import Bg from "../images/IMG.svg"
const CardFeature = (props) => {
  return (
    <div className={styles.CardFeature}>
      <div className={styles.TopImg}>
        <img
          className={styles.IMG}
          src={props.ImageCardFeature}
          alt={props.ImageCardFeature}
        />
        <div className={styles.Like}>
          <button className={styles.btn}>$299</button>
         <button className={styles.buttonlike}><img src={Like} alt="" /></button> 
        </div>
      </div>
      <div className={styles.bottom}>
        <p>England</p>
        <h1>{props.title}</h1>
      </div>
      <hr />
      <div className={styles.ForGap}>
        <div className={styles.days}>
          <img src={clock} alt="" />
          <p>3 days 2 nights</p>
        </div>
        <div className={styles.Rating}>
          <img src={star} alt="" />
          <h2>4.8</h2>
        </div>
      </div>
    </div>
  );
};
export default CardFeature;
