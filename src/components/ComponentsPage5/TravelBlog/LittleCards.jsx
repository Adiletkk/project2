import styles from "./TravelBlog.module.scss"
import ellipse from "./images/Ellipse 16.svg"



const LittleCards = (props) => {
  return (
    <div className={styles.hasbick}>
      <div className={styles.Days}>
        <a>February 28, 2018</a>
        <img src={ellipse} alt="" />
        <a>8 min read</a>
      </div>
      <h1>{props.title}</h1>
      <div className={styles.Peaple}>
        <img src={props.ImageCardFeature} alt="" />
        <p>{props.person}</p>
      </div>
    </div>
  );
};
export default LittleCards;
