import React from 'react'
import scss from './AboutPost.module.scss'
import icon from '../../assets/icon/iconbutton.png'
import blogcard1 from '../../assets/Image/blogcard1.png'
import avatar1 from '../../assets/Image/blogcardimg.png'
import card2 from '../../assets/Image/card2.png'
import card3 from '../../assets/Image/card3.png'
import card4 from '../../assets/Image/card4.svg'
import avatar2 from '../../assets/Image/avatar2.png'
import avatar3 from '../../assets/Image/avatar3.png'
import avatar4 from '../../assets/Image/avatar4.png'



function AboutPost() {
    return (
        <div className='container'>
            <div className={scss.wrapper}>
                <div className={scss.top}>
                    <h2>Latest Posts</h2>
                    <button>View All <img src={icon} alt="" /> </button>
                </div>
                <div className={scss.bottom}>
                    <div className={scss.blogcard1}>
                        <img src={blogcard1} alt="" />
                        <div className={scss.text}>
                            <div className={scss.date}>
                                <p className={scss.may}>24 May 2019</p>
                                <p className={scss.around}></p>
                                <p className={scss.min}>8 min read</p>
                            </div>
                            <h6>The More Important the Work, the More Important the Rest</h6>
                        </div>
                        <div className={scss.profile}>
                            <img src={avatar1} alt="" />
                            <p>Suraj Gregory</p>
                        </div>
                    </div>
                    <div className={scss.blogcard1}>
                        <img src={card2} alt="" />
                        <div className={scss.text}>
                            <div className={scss.date}>
                                <p className={scss.may}>24 May 2019</p>
                                <p className={scss.around}></p>
                                <p className={scss.min}>8 min read</p>
                            </div>
                            <h6>The More Important the Work, the More Important the Rest</h6>
                        </div>
                        <div className={scss.profile}>
                            <img src={avatar2} alt="" />
                            <p>Suraj Gregory</p>
                        </div>
                    </div>
                    <div className={scss.blogcard1}>
                        <img src={card3} alt="" />
                        <div className={scss.text}>
                            <div className={scss.date}>
                                <p className={scss.may}>24 May 2019</p>
                                <p className={scss.around}></p>
                                <p className={scss.min}>8 min read</p>
                            </div>
                            <h6>The More Important the Work, the More Important the Rest</h6>
                        </div>
                        <div className={scss.profile}>
                            <img src={avatar3} alt="" />
                            <p>Suraj Gregory</p>
                        </div>
                    </div>
                    <div className={scss.blogcard1}>
                        <img src={card4} alt="" />
                        <div className={scss.text}>
                            <div className={scss.date}>
                                <p className={scss.may}>24 May 2019</p>
                                <p className={scss.around}></p>
                                <p className={scss.min}>8 min read</p>
                            </div>
                            <h6>The More Important the Work, the More Important the Rest</h6>
                        </div>
                        <div className={scss.profile}>
                            <img src={avatar4} alt="" />
                            <p>Suraj Gregory</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default AboutPost