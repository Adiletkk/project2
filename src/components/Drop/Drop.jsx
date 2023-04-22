import React from 'react'
import scss from './Drop.module.scss'
import image from '../../assets/icon/illustration_travel_contact.png'

function Drop() {
    return (
        <div className='container'>
            <div className={scss.wrapper}>
                <img className={scss.drop} src={image} alt="" />
                <div className={scss.right}>
                    <div className={scss.right_text}>
                        <h3>Drop Us A Line</h3>
                        <p>We normally respond within 2 business days</p>
                    </div>
                    <form>
                        <input type="text" placeholder='Full name' />
                        <input type="email" placeholder='Email' />
                        <input type="text" placeholder='Subject' />
                        <textarea placeholder='Message'></textarea>
                    </form>
                    <button>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Drop