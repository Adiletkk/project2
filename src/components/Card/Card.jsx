import React from 'react'
import scss from './Card.module.scss'
import location from '../../assets/icon/location.png'
import vector from '../../assets/icon/Vector.png'
import phone from '../../assets/icon/phone.png'
import message from '../../assets/icon/message.png'

function Card() {
    return (
        <div className={scss.wrapper + " container"}>
            <div className={scss.card1}>
                <div className={scss.text}>
                    <h5>New York, USA</h5>
                    <div className={scss.text_txt}>
                        <div className={scss.txt1}>
                            <div className={scss.items}>
                                <img src={location} alt="" />
                                <p>Address</p>
                                <img src={vector} alt="" />
                            </div>
                            <a href="https://goo.gl/maps/LrkoCDqA7PWTVzHz5" target='_blank'>3891 Ranchview Dr. Richardson, California 62639</a>
                        </div>
                        <div className={scss.txt2}>
                            <div className={scss.items2}>
                                <img src={phone} alt="" />
                                <p>Phone</p>
                            </div>
                            <a href="tel:+996706200311">(0706) 200-311</a>
                        </div>
                        <div className={scss.txt3}>
                            <div className={scss.items3}>
                                <img src={message} alt="" />
                                <p>Email</p>
                            </div>
                            <a href="" target='_blank'>jessica.hanson@example.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={scss.card2}>
                <div className={scss.text}>
                    <h5>Canada</h5>
                    <div className={scss.text_txt}>
                        <div className={scss.txt1}>
                            <div className={scss.items}>
                                <img src={location} alt="" />
                                <p>Address</p>
                                <img src={vector} alt="" />
                            </div>
                            <a href="https://goo.gl/maps/DdMjaVjbHXqGUXnz9" target='_blank'>2972 Westheimer Rd. Santa Ana, Illinois 85486 </a>
                        </div>
                        <div className={scss.txt2}>
                            <div className={scss.items2}>
                                <img src={phone} alt="" />
                                <p>Phone</p>
                            </div>
                            <a href="tel:(603) 555-0123">(603) 555-0123</a>
                        </div>
                        <div className={scss.txt3}>
                            <div className={scss.items3}>
                                <img src={message} alt="" />
                                <p>Email</p>
                            </div>
                            <a href="" target='_blank'>michelle.rivera@example.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={scss.card3}>
                <div className={scss.text}>
                    <h5>Canada</h5>
                    <div className={scss.text_txt}>
                        <div className={scss.txt1}>
                            <div className={scss.items}>
                                <img src={location} alt="" />
                                <p>Address</p>
                                <img src={vector} alt="" />
                            </div>
                            <a href="https://goo.gl/maps/RTc5ndG6bsMqSe4i9" target='_blank'>2118 Thornridge Cir. Syracuse, Connecticut 35624</a>
                        </div>
                        <div className={scss.txt2}>
                            <div className={scss.items2}>
                                <img src={phone} alt="" />
                                <p>Phone</p>
                            </div>
                            <a href="tel:(217) 555-0113">(217) 555-0113</a>
                        </div>
                        <div className={scss.txt3}>
                            <div className={scss.items3}>
                                <img src={message} alt="" />
                                <p>Email</p>
                            </div>
                            <a href="" target='_blank'>curtis.weaver@example.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card