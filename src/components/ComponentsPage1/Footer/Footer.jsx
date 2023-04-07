import styles from "./Footer.module.scss";
import OVERLAYCOLOR from "./images/OVERLAY COLOR.svg";
import Logo from "./images/Logo (2).svg";
import facebook from "./Soc/Vector.svg";
import instagram from "./Soc/ic_instagram_outlined.svg";
import In from "./Soc/OVERLAY COLOR.svg";
import twitter from "./Soc/OVERLAY COLOR2.svg";
import message from "./Soc/Message.svg";
import map from "./Soc/Map marker.svg";


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
            <input
              type="email"
              className={styles.EmailInput}
              placeholder="Enter your email"
            />
            <button>
              <img src={OVERLAYCOLOR} alt="" />{" "}
            </button>
          </div>
        </div>
      </div>
      <div className={styles.FooterBottom}>
        <div className={styles.LeftText}>
          <img src={Logo} alt="" />
          <p>
            The starting point for your next project based on easy-to-customize
            Material-UI © helps you build apps faster and better.
          </p>
          <div className={styles.ImagesLogo}>
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={In} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
        <div className={styles.Info}>
          <div className={styles.message}>
            <img src={message} alt="" />
            <a>info@example.com</a>
          </div>
          <div className={styles.map}>
            <img src={map} alt="" />
            <a>655 Schaefer Dale</a>
          </div>
        </div>
        <div className={styles.InputWithBtn}>
          <input
            type="email"
            className={styles.EmailInput}
            placeholder="Enter your email"
          />
          <button>
            <img src={OVERLAYCOLOR} alt="" />
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
