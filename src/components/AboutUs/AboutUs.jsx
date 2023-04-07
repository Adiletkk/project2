import React from 'react'
import scss from './AboutUs.module.scss'
import img from '../../assets/Image/about_img.png'
import img2 from '../../assets/Image/about_img2.png'
import img3 from '../../assets/Image/about_img3.png'
import img4 from '../../assets/Image/contact_img3.png'

function AboutUs() {
    return (
        <div className='container'>
            <div className={scss.wrapper}>
                <div className={scss.text}>
                    <h1>About Us</h1>
                    <p>Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook Marketing, Analytics & More!</p>
                </div>
                <div className={scss.gallery}>
                    <img src={img} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                </div>
                <div className={scss.infa}>
                    <div className={scss.item}>
                        <div className={scss.items}>
                            <h2>130</h2>
                            <p>+</p>
                        </div>
                        <p>Air tickets sold</p>
                    </div>
                    <div className={scss.item2}>
                        <div className={scss.items2}>
                            <h2>196</h2>
                            <p>+</p>
                        </div>
                        <p>Tours booked</p>
                    </div>
                    <div className={scss.item3}>
                        <div className={scss.items3}>
                            <h2>10.68k</h2>
                            <p>+</p>
                        </div>
                        <p>Site visitors</p>
                    </div>
                    <div className={scss.item4}>
                        <div className={scss.items4}>
                            <h2>877</h2>
                            <p>+</p>
                        </div>
                        <p>Verified hotels</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs