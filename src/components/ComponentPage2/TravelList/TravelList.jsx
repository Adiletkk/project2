import React, { Component } from "react";
import Slider from "react-slick";
import Header from "../../Header/Header";
import styles from "./Travel.module.scss";
import layer from "./buttonimg/layer.svg";
import OVERLAY from "./buttonimg/OVERLAY COLOR.svg";
import CardFeature from "../../ComponentsPage1/FeaturedTours/Cards/CardFeatureTour";
import Footer from "../../ComponentsPage1/Footer/Footer";
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
import ReactPaginate from "react-paginate";
import { Pagination } from "@mui/material";

// import ReactDOM from "react-dom";
// import { Pagination } from "@mui/material";
function TravelList() {
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

        <div className={styles.TravelListCard}>
          <CardFeature ImageCardFeature={FirstCard} title="National Parks Winter Tour" />
          <CardFeature ImageCardFeature={SecondCard} title="Gourmet Journey of Emilia Romagna - 7 Days" />
          <CardFeature ImageCardFeature={ThirdCard} title="Essential Turkey Small Group" />
          <CardFeature ImageCardFeature={FourthCard} title="Adventure in Iceland" />
          <CardFeature ImageCardFeature={FiveCard} title="Egypt Luxury Guided Tour W/Nile Cruise & Air" />
          <CardFeature ImageCardFeature={SixCard} title="Great Britain Christmas - 7 Days" />
          <CardFeature ImageCardFeature={SevenCard} title="New Tour Egypt (2 for 1) Tour in 5* Hotel & Nile Cruise" />
          <CardFeature ImageCardFeature={EightCard} title="Death Valley Day Tour from Las Vegas- Small Groups..." />
          <CardFeature ImageCardFeature={NineCard} title="Best of Sicily - 8 Days (Small Group Tour)" />
          <CardFeature ImageCardFeature={TenCard} title="6 Nights in Greece" />
          <CardFeature ImageCardFeature={ElevenCard} title="Istanbul to Cappadocia" />
          <CardFeature ImageCardFeature={TwelveCard} title="London with Day trip to Paris" />
        </div>
      </section>
      <Footer />
    </>
  );
}
export default TravelList;
