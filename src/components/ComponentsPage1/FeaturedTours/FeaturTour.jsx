import CardFeature from "./Cards/CardFeatureTour";
import styles from "./FeaturTour.module.scss";
import React from "react";
import FirstCard from "./images/IMG.svg"
import SecondCard from "./images/IMG2.svg"
import ThirdCard from "./images/IMG3.svg"
import  FourthCard from "./images/IMG4.svg"

function FeaturTour() {
  return (
    <section className={styles.FeaturTour}>
      <div className={styles.Paragraph}>
        <h1>Featured Tours</h1>
        <p>
          Our Featured Tours can help you find the trip that's perfect for you!
        </p>
      </div>
      <div className={styles.FlexCard}>
        <CardFeature 
        ImageCardFeature = {FirstCard}
        title = "Warsaw Day Tour"
        />
        <CardFeature 
        ImageCardFeature = {SecondCard}
        title = "Estonia City Tour"
        />
        <CardFeature 
        ImageCardFeature = {ThirdCard}
        title="Thailand City Tour"
        />
        <CardFeature 
         ImageCardFeature = {FourthCard}
         title="Thailand City Tour"
        />
      </div>
      <button className={styles.btn} >View All Tours</button>
    </section>
  );
}
export default FeaturTour;
