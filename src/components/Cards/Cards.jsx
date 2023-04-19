import React, { useState } from 'react'
import scss from './Cards.module.scss'
import card1 from '../../assets/Image/card1_details.svg'
import like from '../../assets/icon/likee.png'
import clock from '../../assets/icon/clock_card.svg'
import star from '../../assets/icon/star.png'
import action_like from '../../assets/icon/ic_heart.png'


function Cards({title, txt, description, image, price}) {

    const [imageSrc, setImageSrc] = useState(like);

    const handleClick = () => {
        if (imageSrc === like) {
            setImageSrc(action_like)
        } else {
            setImageSrc(like)
        }
    }

  return (
    <div className={scss.wrapper}>
        <div className={scss.action}>
            <label><p>{price}</p></label>
            <div className={scss.around}>
                <img src={imageSrc} alt="" onClick={handleClick} />
            </div>
        </div>
        <img className={scss.image} src={image} alt="" />
        <div className={scss.information}>
            <div className={scss.title}>
                <p>{title}</p>
                <h6>{description}</h6>
            </div>
            <div className={scss.line}></div>
            <div className={scss.more}>
                <div className={scss.days}>
                    <img src={clock} alt="" />
                    <p>{txt}</p>
                </div>
                <div className={scss.grade}>
                    <img src={star} alt="" />
                    <h6>4.8</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards