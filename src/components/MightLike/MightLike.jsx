import React from 'react'
import scss from './MightLike.module.scss'
import iconButton from '../../assets/icon/iconbutton.png'
import Cards from '../Cards/Cards'
import card1 from '../../assets/Image/card1_details.svg'
import card2 from '../../assets/Image/card2_details.png'
import card3 from '../../assets/Image/card3_details.png'
import card4 from '../../assets/Image/card4_details.png'

function MightLike() {
    return (
        <div className={scss.wrapper + ' container'}>
            <div className={scss.top}>
                <h3>You Might Like</h3>
                <button>View All <img src={iconButton} alt="" /></button>
            </div>
            <div className={scss.bottom}>
                <Cards price="$200" image={card1} title="Bali" description="Feel Like in Paradise" txt="7 days 6 nights"/>
                <Cards price="$299" image={card2} title="Japan" description="Feel Like a Samurai" txt="6 days 5 nights"/>
                <Cards price="$300" image={card3} title="California" description="California Day Tour" txt="3 days 2 nights"/>
                <Cards price="$350" image={card4} title="Paris" description="Great Weekend in Paris" txt="2 days 1 nights"/>
            </div>
        </div>
    )
}

export default MightLike