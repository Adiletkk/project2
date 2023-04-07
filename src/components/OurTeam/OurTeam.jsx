import React from 'react'
import scss from './OurTeam.module.scss'
import team_1 from '../../assets/Image/team_1.png'

function OurTeam() {
  return (
    <div className='container'>
        <div className={scss.wrapper}>
            <div className={scss.top}>
                <h2>Our Team</h2>
                <p>Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros.</p>
            </div>
            <div className={scss.bottom}>
                <div className={scss.bottom_top}>
                    <div className={scss.card1}>
                        <img src={team_1} alt="" />
                        <div className={scss.text}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurTeam