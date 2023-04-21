import styles from "./Footer.module.scss";
import OverlayColor from "./images/OVERLAY COLOR.svg";
import logo from "./images/Logo (3).svg";
import message from "./images/Message.svg";
import map from "./images/Vector.svg";
import facebook from "./imagesSoc/Vector.svg"
import instagram from "./imagesSoc/ic_instagram_outlined.svg"
import In from "./imagesSoc/OVERLAY COLOR.svg"
import Twitter from "./imagesSoc/OVERLAY COLOR4.svg"

function Footer() {
  return (
    <section className={styles.Footer}>
      <div className={styles.FooterTop}>
        <div className={styles.RightText}>
          <h1>Newsletter</h1>
          <p>
            Sign up now to receive hot special offers and information about the
            best tours!
          </p>
          <div className={styles.Email}>
            <input type="text" placeholder="Enter your email" />
            <button>
              <img src={OverlayColor} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.FooterBottom}>
        <div className={styles.LeftText}>
          <img src={logo} alt="" />
          <p>
            The starting point for your next project based on easy-to-customize
            Material-UI © helps you build apps faster and better.
          </p>
          <div className={styles.ImagesLogo}>
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={In} alt="" />
            <img src={Twitter} alt="" />
          </div>
        </div>
        <div className={styles.Info}>
          <div className={styles.message}>
            <img src={message} alt="" />
            <p>info@example.com</p>
          </div>
          <div className={styles.map}>
            <img src={map} alt="" />
            <p>655 Schaefer Dale</p>
          </div>
        </div>
        <div className={styles.InputWithBtn}>
          <input type="text" placeholder="Email address" />
          <button>
            <img src={OverlayColor} alt="" />
          </button>
        </div>
      </div>
      <div className={styles.under}>
        <a>© 2021. All rights reserved</a>
        <div className={styles.rightunder}>
          <a>Help Center</a>
          <a>Terms of Service</a>
        </div>
      </div>
    </section>
  );
}
export default Footer;
