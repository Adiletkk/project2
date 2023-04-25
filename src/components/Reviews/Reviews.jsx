import React from 'react'
import scss from './Reviews.module.scss'
import person from '../../assets/Image/card_personal.svg'
import star from '../../assets/icon/star.png'
import facebook from '../../assets/icon/facebook_button.png'
import insta from '../../assets/icon/insta_button.png'
import inn from '../../assets/icon/in_button.png'
import twitter from '../../assets/icon/twit_button.png'
import Comment from '../Comment/Comment'

function Reviews() {
  return (
    <div className='container'>
        <div className={scss.wrapper}>
            <div className={scss.card_personal}>
                <div className={scss.infa}>
                    <img src={person} alt="" />
                    <div className={scss.infa_title}>
                        <h4>Kevin Francis</h4>
                        <div className={scss.txt}>
                            <img src={star} alt="" />
                            <h6>4.8</h6>
                            <p> (234 reviews)</p>
                        </div>
                    </div>
                    <p>Described by Queenstown House & Garden magazine as having 'one of the best views we've ever seen' you will love relaxing in this newly built</p>
                </div>
                <div className={scss.social}>
                    <a href="https://www.facebook.com/elonreevesmusk/?locale=ru_RU"><img src={facebook} alt="" /></a>
                    <a href="https://www.instagram.com/news.kg/"><img src={insta} alt="" /></a>
                    <a href=""><img src={inn} alt="" /></a>
                    <a href="https://twitter.com/?lang=ru"><img src={twitter} alt="" /></a>
                </div>
                <div className={scss.contact}>
                    <p>Member since Mar 15, 2021</p>
                    <button>Contact Tour Guide</button>
                </div>
            </div>
            <div className={scss.comment}>
                <div className={scss.action}>
                    <h4>123 Reviews</h4>
                    <div className={scss.btn}>
                        <select name="" id="">
                            <option value="Most recent">Most recent</option>
                            <option value="Most first ">Most first</option>
                        </select>
                        <button>Write a Review</button>
                    </div>
                </div>
                <div className={scss.comments}>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews