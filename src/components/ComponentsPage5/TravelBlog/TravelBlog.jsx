import ellipse from "./images/Ellipse 16.svg"
import styles from "./TravelBlog.module.scss"
import Antonio from "./images/img1.svg"
import Header from "../../Header/Header"
import LittleCards from "./LittleCards"
import CameliBourke from "./images/img3.svg"
import img2 from "./images/img.svg"
import img4 from "./images/img4.svg"


function TravelBlog(){
    return(
        <>
        <Header/>
        <section className={styles.TravelBlog}>
          
            <div className={styles.BigCard} >
                <div className={styles.Days} >
                    <a>February 28, 2018</a>
                    <img src={ellipse} alt="" />
                    <a>8 min read</a>
                </div>
                <h1>Don't Waste Time! 7 Facts Until You Reach Your Event</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                <div className={styles.Peaple}>
                    <img src={Antonio} alt="" />
                    <p>Antoine Findlay</p>
                </div>
            </div>
            <div className={styles.Right}>
            <div className={styles.Thinktop}>
            <div className={styles.Days} >
                    <a>February 28, 2018</a>
                    <img src={ellipse} alt="" />
                    <a>8 min read</a>
                </div>
                <h1>Don't Waste Time! 7 Facts Until You Reach Your Event</h1>
                <div className={styles.Peaple}>
                    <img src={img2} alt="" />
                    <p>Antoine Findlay</p>
                </div>

            </div>
            <div className={styles.Thinkbottom}>
       <div className={styles.LittleCards}>
       <div className={styles.hasbick}>
      <div className={styles.Days}>
        <a>February 28, 2018</a>
        <img src={ellipse} alt="" />
        <a>8 min read</a>
      </div>
      <h1>7 Places To Get Deals On Event</h1>
      <div className={styles.Peaple}>
        <img src={CameliBourke} alt="" />
        <p>Kamile Burke</p>
      </div>
    </div>
    <div className={styles.hasbick}>
      <div className={styles.Days}>
        <a>February 28, 2018</a>
        <img src={ellipse} alt="" />
        <a>8 min read</a>
      </div>
      <h1>7 Places To Get Deals On Event</h1>
      <div className={styles.Peaple}>
        <img src={img4} alt="" />
        <p>Kamile Burke</p>
      </div>
    </div>
       </div>
            </div>
            </div>
        </section>
        </>
    )
}
export default TravelBlog