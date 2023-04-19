import React, { Component } from "react";
import Slider from "react-slick";
import Header from "../../Header/Header";
import styles from "./Travel.module.scss";
import layer from "./buttonimg/layer.svg";
import OVERLAY from "./buttonimg/OVERLAY COLOR.svg";
import CardFeature from "../../ComponentsPage1/FeaturedTours/Cards/CardFeatureTour";
// import Footer from "../../ComponentsPage1/Footer/Footer";
import FirstCard from "./BgImg/ImageRatio1.svg";
import SecondCard from "./BgImg/ImageRatio2.svg";
import ThirdCard from "./BgImg/ImageRatio3.svg";
import FourthCard from "./BgImg/ImageRatio4.svg";
import FiveCard from "./BgImg/ImageRatio5.svg";
import SixCard from "./BgImg/ImageRatio6.svg";
import SevenCard from "./BgImg/ImageRatio7.svg";
import EightCard from "./BgImg/ImageRatio8.svg";
import NineCard from "./BgImg/ImageRatio9.svg";
import TenCard from "./BgImg/ImageRatio10.svg";
import ElevenCard from "./BgImg/ImageRatio11.svg";
import TwelveCard from "./BgImg/ImageRatio12.svg";
// import ReactDOM from "react-dom";
// import ReactPaginate from "react-paginate";
// import { Pagination } from "@mui/material";
function TravelList() {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className={styles.TravelList}>
        <Header />
        <div className={styles.UnderSearch}>
          <input
            className={styles.WhereWe}
            type="text"
            placeholder="Where we go?"
          />
          <img src={layer} alt="" />
          <input
            className={styles.DepDay}
            type="text"
            placeholder="Departure day"
          />
          <img src={layer} alt="" />
          <input className={styles.Guests} type="text" placeholder="Guests" />
          <button>
            <img src={OVERLAY} alt="Guests" />
          </button>
        </div>

        <Slider className={styles.Slider} {...settings}>
          <div className={styles.TravelListCard}>
            <CardFeature ImageCardFeature={FirstCard} title="Warsaw Day Tour" />
            <CardFeature
              ImageCardFeature={SecondCard}
              title="Warsaw Day Tour"
            />
            <CardFeature ImageCardFeature={ThirdCard} title="Warsaw Day Tour" />
            <CardFeature
              ImageCardFeature={FourthCard}
              title="Warsaw Day Tour"
            />
            <CardFeature ImageCardFeature={FiveCard} title="Warsaw Day Tour" />
            <CardFeature ImageCardFeature={SixCard} title="Warsaw Day Tour" />
            <CardFeature ImageCardFeature={SevenCard} title="Warsaw Day Tour" />
            <CardFeature ImageCardFeature={EightCard} title="Warsaw Day Tour" />
            <CardFeature ImageCardFeature={NineCard} title="Warsaw Day Tour" />
            <CardFeature ImageCardFeature={TenCard} title="Warsaw Day Tour" />
            <CardFeature
              ImageCardFeature={ElevenCard}
              title="Warsaw Day Tour"
            />
            <CardFeature
              ImageCardFeature={TwelveCard}
              title="Warsaw Day Tour"
            />
          </div>
          <div className={styles.TravelListCard}>
            <CardFeature ImageCardFeature={FirstCard} title="Warsaw Day Tour" />
            <CardFeature
              ImageCardFeature={SecondCard}
              title="Warsaw Day Tour"
            />
            <CardFeature ImageCardFeature={ThirdCard} title="Warsaw Day Tour" />
            <CardFeature
              ImageCardFeature={FourthCard}
              title="Warsaw Day Tour"
            />
            <CardFeature ImageCardFeature={FiveCard} title="Warsaw Day Tour" />
            <CardFeature ImageCardFeature={SixCard} title="Warsaw Day Tour" />
            <CardFeature ImageCardFeature={SevenCard} title="Warsaw Day Tour" />
            <CardFeature ImageCardFeature={EightCard} title="Warsaw Day Tour" />
            <CardFeature ImageCardFeature={NineCard} title="Warsaw Day Tour" />
            <CardFeature ImageCardFeature={TenCard} title="Warsaw Day Tour" />
            <CardFeature
              ImageCardFeature={ElevenCard}
              title="Warsaw Day Tour"
            />
            <CardFeature
              ImageCardFeature={TwelveCard}
              title="Warsaw Day Tour"
            />
          </div>
          {/* <div className={styles.TravelListCard}>
              <CardFeature
                ImageCardFeature={FirstCard}
                title="Warsaw Day Tour"
              />
              <CardFeature
                ImageCardFeature={SecondCard}
                title="Warsaw Day Tour"
              />
              <CardFeature
                ImageCardFeature={ThirdCard}
                title="Warsaw Day Tour"
              />
              <CardFeature
                ImageCardFeature={FourthCard}
                title="Warsaw Day Tour"
              />
              <CardFeature
                ImageCardFeature={FiveCard}
                title="Warsaw Day Tour"
              />
              <CardFeature ImageCardFeature={SixCard} title="Warsaw Day Tour" />
              <CardFeature
                ImageCardFeature={SevenCard}
                title="Warsaw Day Tour"
              />
              <CardFeature
                ImageCardFeature={EightCard}
                title="Warsaw Day Tour"
              />
              <CardFeature
                ImageCardFeature={NineCard}
                title="Warsaw Day Tour"
              />
              <CardFeature ImageCardFeature={TenCard} title="Warsaw Day Tour" />
              <CardFeature
                ImageCardFeature={ElevenCard}
                title="Warsaw Day Tour"
              />
              <CardFeature
                ImageCardFeature={TwelveCard}
                title="Warsaw Day Tour"
              />
            </div> */}
        </Slider>
      </section>
      {/* <Footer /> */}
    </>
  );
}
export default TravelList;
