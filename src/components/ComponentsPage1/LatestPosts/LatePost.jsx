import React from "react";
import Slider from "react-slick";
import styles from "./LatePosts.module.scss";
import ViewImg from "./images/OVERLAY COLOR.svg";
import classNames from "classnames";
import AliceCarousel from "react-alice-carousel";
import Vector from "./images/OVERLAY1COLOR.svg";

function LatestPost() {
  const nextButton = (
    <button
      className={classNames(styles.customNextButton, styles.sliderButton)}
    >
      <span classNames="visually-hidden">
        <img src={Vector} alt="" width="12px" />
      </span>
    </button>
  );
  const prevButton = (
    <button
      className={classNames(styles.customPrevButton, styles.sliderButton)}
    >
      <span classNames="visually-hidden">
        <img
          src="https://cdn-icons-png.flaticon.com/512/545/545680.png"
          alt=""
          width="18px"
        />
      </span>
    </button>
  );
  const DisableDots = ( 
    <button  className={classNames(styles.DisableDots, styles.Dots)}> 
   
    </button> 
  );
  return (
 
      <section className={styles.LatestPost}>
    
          <div className={styles.left}>
          <AliceCarousel className={styles.Alicee}
          renderNextButton={() => nextButton}
          renderPrevButton={() => prevButton}
          autoPlay={false}
          renderDotsItem={()=>DisableDots}

        >
            <div className={styles.Paragraph}>
              <a> 19 May 2021</a>
              <h1>To avoid conflicts it is recommended that business </h1>
              <p>
                Business stakeholders review wireframes to ensure that
                requirements and objectives
              </p>
            </div>
            <div className={styles.Paragraph}>
              <a> 19 May 2021</a>
              <h1>To avoid conflicts it is recommended that business </h1>
              <p>
                Business stakeholders review wireframes to ensure that
                requirements and objectives
              </p>
            </div>
            <div className={styles.Paragraph}>
              <a> 19 May 2021</a>
              <h1>To avoid conflicts it is recommended that business </h1>
              <p>
                Business stakeholders review wireframes to ensure that
                requirements and objectives
              </p>
            </div>
            <div className={styles.Paragraph}>
              <a> 19 May 2021</a>
              <h1>To avoid conflicts it is recommended that business </h1>
              <p>
                Business stakeholders review wireframes to ensure that
                requirements and objectives
              </p>
            </div>
            </AliceCarousel>
          </div>
      
       
         
        <div className={styles.right}>
          <h2>Latest Posts </h2>
          <div className={styles.text}>
            <a> 17 May 2021</a>
            <h1>
              Understanding color theory: the color wheel and finding
              complementary colors
            </h1>
            <p>
              Digital product design news, articles, and resources delivered
              straight to your inbox.
            </p>
            <hr />
            <div className={styles.text}>
              <a> 13 Aug 2021</a>
              <h1>Any mechanical keyboard enthusiasts in design?</h1>
              <p>
                Sidebar has been collecting the best design links of the day
                since October 2012. It's maintained by Sacha Greif and built
                with ...
              </p>
              <hr />
            </div>
            <div className={styles.text}>
              <a> 04 Jul 2021</a>
              <h1>The More Important the Work, the More Important the Rest</h1>
              <p>
                Interested in digital strategy? Subscribe and get the 5 most
                piping hot links of the week, emailed straight to your inbox.
              </p>
              <hr />
            </div>
          </div>
          <div className={styles.ViewAll}>
            <a>View All</a>
            <img src={ViewImg} alt="" />
          </div>
        </div>
      
      </section>
 
  );
}
export default LatestPost;
