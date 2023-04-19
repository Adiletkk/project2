import React from 'react'
import scss from './OurClients.module.scss'
import spotify from '../../assets/icon/spotify.png'
import slack from '../../assets/icon/slack.png'
import netflix from '../../assets/icon/netflix.png'
import microsoft from '../../assets/icon/microsoft.png'
import dropbox from '../../assets/icon/dropbox.png'
import facebook from '../../assets/icon/facebook3.png'
import heroku from '../../assets/icon/heroku.png'
import lenovo from '../../assets/icon/lenovo.png'
import tripadvisor from '../../assets/icon/tripadvisor.png'
import vimeo from '../../assets/icon/vimeo.png'
import airbnb from '../../assets/icon/airbnb.png'
import google from '../../assets/icon/google.png'

function OurClients() {
    return (
        <div className='container'>
            <div className={scss.wrapper}>
                <div className={scss.top}>
                        <h2>Our Clients</h2>
                    <div className={scss.top_right}>
                        <h4>Enhance Your Life By Having A Sense Of Purpose</h4>
                        <p>Around the world, food-borne illnesses have become increasingly common. In the United States alone, millions of people get a food-related illness each year.</p>
                    </div>
                </div>
                <div className={scss.bottom}>
                    <div className={scss.items1}>
                        <img className={scss.image} src={spotify} alt="" />
                        <img src={slack} alt="" />
                        <img src={netflix} alt="" />
                    </div>
                    <div className={scss.items2}>
                        <img src={microsoft} alt="" />
                        <img src={dropbox} alt="" />
                        <img src={facebook} alt="" />
                    </div>
                    <div className={scss.items3}>
                        <img src={heroku} alt="" />
                        <img src={lenovo} alt="" />
                        <img src={tripadvisor} alt="" />
                    </div>
                    <div className={scss.items4}>
                        <img src={vimeo} alt="" />
                        <img src={airbnb} alt="" />
                        <img src={google} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurClients