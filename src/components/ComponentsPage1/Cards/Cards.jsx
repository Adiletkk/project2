import React from "react";
import styles from "./Cards.module.scss"

const Card = (props) => {
    return (
      <div className={styles.Card}>
        <img src={props.imageAlt} alt={props.imageAlt} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    );
  };
  export default Card;


  
 