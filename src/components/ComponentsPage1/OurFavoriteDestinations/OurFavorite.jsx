import AliceCarousel from "react-alice-carousel";
import ImgCard from "../Cards/ImgCard";
import styles from "./OurFavorite.module.scss";
import location from "./images/Vector.svg"


function OurFavorite() {

  return (

    <section className={styles.OurFavorite}>
      <div className={styles.ContentLeft}>
        <h1>Our Favorite Destinations</h1>
        <p>Since wire-frame renderings are relatively simple and fast to calculate, they are often used in cases</p>
        <ul>
            <li><p>First Class Flights</p></li>
            <li><p>5 Star Accommodations</p></li>
            <li><p>Inclusive Packages</p></li>
            <li><p>Latest Model Vehicles</p></li>
            <li><p>Handpicked Hotels</p></li>
            <li><p>Accesibility managment</p></li>
        </ul>
      </div>
      <div className={styles.ContentRight} >
        <div className={styles.top}>
       <div className={styles.CardOne}>
        <h1>Hongkong</h1>
        <div className={styles.asia}>
          <img src={location} alt="" />
          <a>Asia</a>
        </div>
        </div>
        <div className={styles.CardTwo}>
        <h1>Ireland</h1>
        <div className={styles.asia}>
          <img src={location} alt="" />
          <a>Asia</a>
        </div>
        </div>

       </div>
       <div className={styles.Bottom}>
       <div className={styles.CardThree}>
        <h1>Madagascar</h1>
        <div className={styles.asia}>
          <img src={location} alt="" />
          <a>Asia</a>
        </div>
        </div>
        <div className={styles.CardFour}>
        <h1>Vietnam</h1>
        <div className={styles.asia}>
          <img src={location} alt="" />
          <a>Asia</a>
        </div>
        </div>

       </div>
       </div>
       
    </section>
  );
}
export default OurFavorite;
