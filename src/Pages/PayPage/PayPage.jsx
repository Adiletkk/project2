import React from "react";
import css from "./PayPage.module.scss";
import fon from "../../assets/Image/payimg.png";
import star from "../../assets/icon/star.png";
import avatar from "../../assets/icon/Avatar.png";
import dude from "../../assets/icon/dude.png";
import calendar from "../../assets/icon/calendar.png";
import Footer from "../../components/ComponentsPage1/Footer/Footer";
import Header from "../../components/Header/Header";
import p from "../../assets/icon/p.png";
import mcard from "../../assets/icon/mastercard.png";
import visa from "../../assets/icon/visa.png";

function PayPage() {
  return (
    <div className={css.main}>
      <Header />
      <div className={css.wrapper}>
        <div className={css.all_tags}>
          <div className={css.left_wrap}>
            <div className={css.top_text}>
              <h1>Confirm and Pay</h1>
            </div>
            <div className={css.top_input}>
              <h1>Shipping Information</h1>
            </div>
            <p>Billing Address</p>
            <div className={css.inputs}>
              <input type="text" id={css.big_input} placeholder="Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className={css.long_input}>
              <input type="text" placeholder="Full Address" />
              <input type="text" placeholder="Full Address 2 (optional)" />
            </div>
            <div className={css.tumbler}>
              <div>
                <h1>Shipping Address</h1>
              </div>
              <div>
                <h1>Same as Billing Address</h1>
              </div>
            </div>
            <div className={css.inputs}>
              <input type="text" id={css.big_input} placeholder="Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className={css.long_input}>
              <input type="text" placeholder="Full Address" />
              <input type="text" placeholder="Full Address 2 (optional)" />
            </div>
            <div className={css.border}></div>
            <div className={css.last_input}>
              <h1>Payment Methods</h1>
              <div className={css.pay_info}>
                <div>
                  <input type="checkbox" id="checkbox" />
                </div>
                <div className={css.pay_cetner}>
                  <div>
                    <p>Pay with Paypal</p>
                  </div>
                  <div>
                    <p>
                      You will be redirected to PayPal website to complete your
                      purchase securely.
                    </p>
                  </div>
                </div>
                <div>
                  <img src={p} alt="" />
                </div>
              </div>
            </div>
            <div className={css.card}>
              <div className={css.pay_info}>
                <div>
                  <input type="checkbox" />
                </div>
                <div className={css.center}>
                  <div>
                    <p>Credit / Debit Card</p>
                  </div>
                  <div>
                    <p>We support Mastercard, Visa, Discover and Stripe.</p>
                  </div>
                </div>
                <div>
                  <img src={mcard} alt="" />
                </div>
                <div>
                  <img src={visa} alt="" />
                </div>
              </div>
              <div className={css.long_input}>
                <input type="password" placeholder="Card Number" />

                <input type="text" placeholder="Card Holder" />
              </div>
              <div className={css.inputs}>
                <input
                  type="text"
                  id={css.big_input}
                  placeholder="Expiration Date"
                />
                <input type="text" placeholder="CVC" />
              </div>
            </div>
          </div>

          <div className={css.right_wrap}>
            <div className={css.content}>
              <div className={css.left}>
                <img src={fon} alt="" />
              </div>
              <div className={css.right}>
                <h1>Warsaw Day Tour</h1>
                <div className={css.text_right}>
                  <img src={star} alt="" />
                  <h1>4.6</h1>
                  <p>(234 reviers)</p>
                </div>
                <div className={css.right_avatar}>
                  <img src={avatar} alt="" />
                  <div className={css.text_right_img}>
                    <p>Tour guide by </p>
                    <h2>Kevin Francis</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className={css.right_cetner}>
              <div>
                <label for="start">
                  <img src={calendar} alt="" />
                </label>
                <input
                  type="month"
                  id="start"
                  name="start"
                  min="2018-03"
                  value="2018-05"
                  max="2023"
                />
              </div>
              <div></div>
            </div>
            <div className={css.text_bottom}>
              <div>
                <h3>Service charge</h3>
                <h1>$357</h1>
              </div>
              <div className={css.bottom_border}>
                <h3>Discount</h3>
                <h1>-</h1>
              </div>
              <div className={css.last}>
                <div className={css.between}>
                  <h1>Total</h1>
                  <h1>$357</h1>
                </div>
                <div>
                  <button>Complete Booking</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PayPage;
