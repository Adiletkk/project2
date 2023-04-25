import React from "react";
import styles from "./Top.module.scss";

const Top = (props) => {
  return (
    <div className={styles.CardFeature}>
      <div className={styles.TopImg}>
        <img
          className={styles.IMG}
          src={props.ImageCardFeature}
          alt={props.ImageCardFeature}
        />
      </div>
      <div className={styles.Under}>
      <div className={styles.Data}>
        <a>24 May 2019</a>
        <ellipse className={styles.ellipse} />
        <a>8 min read</a>
      </div>
      <h1>{props.title}</h1>
      <div className={styles.JaneCooper}>
        <img src={props.avatar} alt="" />
        <p>Jane Cooper</p>
      </div>
    </div>
    </div>
  );
};
export default Top;
