import React from "react";
import css from "./Payend.module.scss";
import imgs from "../../assets/Image/about_img3.png";
// import Header from "../../components/Header/Header";
import star from "../../assets/icon/star.png";
import avatar from "../../assets/icon/Avatar.png";
import calendar from "../../assets/icon/calendar.png";
import dude from "../../assets/icon/dude.png";
import credit from "../../assets/icon/credit.png";
import cube from "../../assets/icon/cube.png";
import recept from "../../assets/icon/recept.png";
// import Footer from "../../components/ComponentsPage1/Footer/Footer";
import downloade from '../../assets/icon/downloade.png'
import { Link } from "react-router-dom";

function Payend() {
  return (
    <div className={css.wrapper}>
      {/* <Header /> */}
      <div className={css.all_tegs}>
        <div className={css.left}>
          <img src={imgs} alt="" />
        </div>
        <div className={css.right_wrap}>
          <div className={css.text}>
            <h1>Completed 🎉</h1>
          </div>
          <div className={css.space_a}>
            <div className={css.left_colum}>
              <div>
                <p>Warsaw Day Tour</p>
              </div>
              <div className={css.center_flex}>
                <img src={star} alt="" />
                <h2>4.6</h2>
                <p>(234 revires)</p>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div className={css.space}>
              <div>
                <img src={avatar} alt="" />
              </div>
              <div className={css.text_colum}>
                <div>
                  <p>Tour guide by </p>
                </div>
                <div>
                  <h4>Kevin Francis</h4>
                </div>
              </div>
            </div>
          </div>
          <div className={css.bottom_right}>
            <div className={css.last_wrap}>
              <div>Booking Details </div>
              <div className={css.bottom_first}>
                <div className={css.input_one}>
                  <div className={css.center_flex}>
                    <img src={calendar} alt="" />
                    <p>Departure day</p>
                  </div>
                  <div>
                    <p>19 Apr 2019</p>
                  </div>
                </div>
                <div className={css.input_two}>
                  <div className={css.center_flex}>
                    <img src={dude} alt="" />
                    <p>Guests</p>
                  </div>
                  <div>
                    <p>2 guest</p>
                  </div>
                </div>
              </div>
              <div className={css.bottom_two}>
              <div className={css.input_three}>
                  <div className={css.center_flex}>
                    <img src={cube} alt="" />
                    <p>Booking code</p>
                  </div>
                  <div>
                    <p>KU_H8SDM</p>
                  </div>
                </div>
                <div className={css.input_four}>
                  <div className={css.center_flex}>
                    <img src={calendar} alt="" />
                    <p>Booking day</p>
                  </div>
                  <div>
                    <p>23 Dec 2019</p>
                  </div>
                </div>
                <div className={css.input_five}>
                  <div className={css.center_flex}>
                    <img src={recept} alt="" />
                    <p>Total</p>
                  </div>
                  <div>
                    <p>$357</p>
                  </div>
                </div>
                <div className={css.input_six}>
                  <div className={css.center_flex}>
                    <img src={credit} alt="" />
                    <p>Payment method</p>
                  </div>
                  <div>
                    <p>Paypal</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={css.btn_end}>
                <div>
                    <button className={css.silver}> Back Home </button>
                </div>
                <div>
                  <Link to='/travel'>
                    <button className={css.orange}>
                        <img src={downloade} alt="" />
                        <h1>Download Invoice</h1>
                    </button>
                    </Link>
                </div>
            </div>
          </div>
        </div>
        
      </div>
            {/* <Footer/> */}
    </div>
  );
}

export default Payend;
