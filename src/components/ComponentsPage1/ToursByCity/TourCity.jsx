import TourCityCard from "./Cards/TourCityCard"
import styles from "./TourCity.module.scss"
import img1 from "./images/IMG.svg"
import img3 from "./images/IMG3.svg"
import img4 from "./images/IMG4.svg"
import img5 from "./images/IMG5.svg"
import img6 from "./images/IMG6.svg"
import img7 from "./images/IMG8.svg"
import img9 from "./images/IMG9.svg"
import img10 from "./images/IMG10.svg"
import ViewImg from "./images/OVERLAY COLOR.svg"
import React from "react"

function TourCity(){
    return(
    <section className={styles.TourCity}>
        <div className={styles.Paragraph}>
            <h1>Tours By City</h1>
            <p>Our Featured Tours can help you find the trip that's perfect for you!</p>
            <div className={styles.viewall}>
                <a>ViewAll</a>
                <img src={ViewImg} alt="" />
            </div>
        </div>
       
        <div className={styles.MoreCard}>
            <div className={styles.top}>
            <TourCityCard
            IMG={img1}
            title="Qatar"
            
            />
            <TourCityCard
            IMG={img3}
            title="Barbados"
            />
            <TourCityCard
            IMG={img4}
            title="Hungary"
            />
            <TourCityCard
              IMG={img5}
              title="Netherlands"
            />
            </div>
            <div className={styles.bottom}>
            <TourCityCard
             IMG={img6}
             title="Uganda"
            />
            <TourCityCard
            IMG={img10}
            title="Eritrea"
            />
            <TourCityCard
            IMG={img7}
            title="Gambia"
            />
            <TourCityCard
               IMG={img9}
               title="Lebanon"
            />
           
            </div>
        </div>
    </section>
    )
}
export default TourCity