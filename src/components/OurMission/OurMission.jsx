import React from 'react'
import scss from './OurMission.module.scss'
import image from '../../assets/icon/illustration_vision.png' 

function OurMission() {
  return (
    <div className='container'>
        <div className={scss.wrapper}>
            <div className={scss.top}>
                <h2>Our Mission</h2>
                <p>Curabitur ullamcorper ultricies nisi. Aenean viverra rhoncus pede.</p>
            </div>
            <div className={scss.bottom}>
                <img src={image} alt="image" />
                <div className={scss.right}>
                    <div className={scss.one}>
                        <h1>01</h1>
                        <div className={scss.text1}>
                            <h4>Vestibulum</h4>
                            <p>Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.</p>
                        </div>
                    </div>
                    <div className={scss.two}>
                        <div className={scss.card2}>
                            <h1>02</h1>
                            <div className={scss.text2}>
                                <h4>Fusce</h4>
                                <p>In dui magna, posuere eget, vestibulum et, tempor auctor, justo.</p>
                            </div>
                        </div>
                        <div className={scss.card3}>
                            <h1>03</h1>
                            <div className={scss.text2}>
                                <h4>Praesent</h4>
                                <p className={scss.txt}>Suspendisse feugiat. Quisque id odio.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurMission