import Card from "../Cards/Cards";
import styles from "./Explore.module.scss";
import Bg from "./images/IMG.svg";
import playicon from "./images/Vector.svg";
import StarPeaple from "./images/Vector2.svg";
import like from "./images/Vectorlike.svg"
import Secure from "./images/Vector4.svg"

function Explore() {
  return (
    <section className={styles.MainExplore}>
      <div className={styles.Forgap}>
        <div className={styles.Paragraph}>
          <h1>Explore A Different Way To Travel</h1>
          <p>
            Cras ultricies mi eu turpis hendrerit fringilla. Nulla consequat
            massa quis enim.
          </p>
        </div>
        <div className={styles.Background}>
          <div className={styles.Card}>
            <p>Device</p>
            <h1>The More Important the Work</h1>
            <div className={styles.WatchVideo}>
              <img src={playicon} alt="" />
              <a>Watch Video</a>
            </div>
          </div>
        </div>
        <div className={styles.Cards}>
          <Card
            imageAlt={StarPeaple}
            title="Professional Tour Guides"
            description="Nunc nonummy metus. Donec elit libero"
          />
          <Card
            imageAlt={like}
            title="Customer Satisfaction"
            description="Nunc nonummy metus. Donec elit libero"
          />
            <Card
            imageAlt={Secure}
            title="Secure Payment"
            description="Nunc nonummy metus. Donec elit libero"
          />
        </div>
      </div>
    </section>
  );
}
export default Explore;
