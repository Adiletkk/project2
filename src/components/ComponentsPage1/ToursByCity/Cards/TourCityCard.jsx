import styles from "./TourCityCard.module.scss";
import IMG from "../images/IMG.svg"
const TourCityCard = (props) => {
  return (
    <div className={styles.TourCity}>
      <div className={styles.leftimg}>
        <img src={props.IMG} alt={props.Img} />
      </div>
      <div className={styles.Right}>
        <h2>{props.title}</h2>
        <p>196 Place</p>
      </div>
    </div>
  );
};
export default TourCityCard;
