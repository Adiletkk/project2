import React from 'react'
import scss from './TourDetails.module.scss'
import link from '../../assets/icon/link.png'
import heart from '../../assets/icon/heart.png'
import star from '../../assets/icon/star.png'
import location from '../../assets/icon/location_black.png'
import avatar from '../../assets/icon/Avatar.png'
import calendar from '../../assets/icon/black_calendar.png'
import clock from '../../assets/icon/clock.png'
import contactname from '../../assets/icon/contactname.png'
import phone from '../../assets/icon/phone.png'
import languagess from '../../assets/icon/languages.png'
import markerorange from '../../assets/icon/markerorange.png'
import marker from '../../assets/icon/markergray.png'
import facebook from '../../assets/icon/facebook_button.png'
import insta from '../../assets/icon/insta_button.png'
import inn from '../../assets/icon/in_button.png'
import twit from '../../assets/icon/twit_button.png'
import calendarInput from '../../assets/icon/calendar_input.png'
import person from '../../assets/icon/person_input.png'

function TourDetails() {
    return (
        <div className='container'>
            <div className={scss.wrapper}>
                <div className={scss.left}>
                    <div className={scss.tourName}>
                        <h3>Estonia City Tour</h3>
                        <div className={scss.tourName__items}>
                            <img src={link} alt="" />
                            <img src={heart} alt="" />
                        </div>
                    </div>
                    <div className={scss.tourInfo}>
                        <div className={scss.grade}>
                            <img src={star} alt="" />
                            <h6>4.6</h6>
                            <p>(234 reviews)</p>
                        </div>
                        <div className={scss.location}>
                            <img src={location} alt="" />
                            <p>Tokyo, Jappan</p>
                        </div>
                        <div className={scss.guide}>
                            <img src={avatar} alt="" width="24px" />
                            <div className={scss.guide__name}>
                                <p>Tour guide by </p>
                                <p className={scss.name}>Kevin Francis</p>
                            </div>
                        </div>
                    </div>
                    <div className={scss.line}></div>
                    <div className={scss.tourOverview}>
                        <h4>Tour Overview</h4>
                        <div className={scss.tourOverview__info}>
                            <div className={scss.tourOverview__left}>
                                <div className={scss.available}>
                                    <img src={calendar} alt="" />
                                    <div className={scss.date}>
                                        <p className={scss.title1}>Available </p>
                                        <p>03/01/2019 - 01/30/2023</p>
                                    </div>
                                </div>
                                <div className={scss.location}>
                                    <img src={location} alt="" />
                                    <div className={scss.location_right}>
                                        <p className={scss.nameCountry}>Location</p>
                                        <p className={scss.nameCity}>London</p>
                                    </div>
                                </div>
                                <div className={scss.durations}>
                                    <img src={clock} alt="" />
                                    <div className={scss.clock}>
                                        <p className={scss.duration}>Durations</p>
                                        <p className={scss.days}>4 days 3 nights</p>
                                    </div>
                                </div>
                            </div>
                            <div className={scss.tourOverview__right}>
                                <div className={scss.contactName}>
                                    <img src={contactname} alt="" />
                                    <div className={scss.contactName_right}>
                                        <p className={scss.contcName}>Contact name</p>
                                        <p className={scss.clientName}>Kevin Francis</p>
                                    </div>
                                </div>
                                <div className={scss.contactPhone}>
                                    <img src={phone} alt="" />
                                    <div className={scss.contactPhone_right}>
                                        <p className={scss.contcPhone}>Contact phone</p>
                                        <p className={scss.number}>(308) 555-0121</p>
                                    </div>
                                </div>
                                <div className={scss.languages}>
                                    <img src={languagess} alt="" />
                                    <div className={scss.languages_right}>
                                        <p className={scss.lang}>Languages</p>
                                        <p className={scss.lang2}>Russian, Spanish</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={scss.line}></div>
                    <div className={scss.tourDescription}>
                        <h4>Tour Description</h4>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <div className={scss.tourHighlights}>
                        <h4>Tour Highlights</h4>
                        <div className={scss.spisok}>
                            <ul>
                                <li>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
                                <li>Vulputate placerat amet pulvinar lorem nisl.</li>
                                <li>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>
                                <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={scss.tourIncludes}>
                        <h4>Tour Includes</h4>
                        <div className={scss.includes}>
                            <div className={scss.includes_left}>
                                <div className={scss.audio}>
                                    <img src={markerorange} alt="" />
                                    <p>Audio guide</p>
                                </div>
                                <div className={scss.food}>
                                    <img src={markerorange} alt="" />
                                    <p>Food and drinks</p>
                                </div>
                                <div className={scss.lunch}>
                                    <img src={marker} alt="" />
                                    <p>Lunch</p>
                                </div>
                                <div className={scss.private}>
                                    <img src={marker} alt="" />
                                    <p>Private tour</p>
                                </div>
                                <div className={scss.special}>
                                    <img src={marker} alt="" />
                                    <p>Special activities</p>
                                </div>
                            </div>
                            <div className={scss.includes_right}>
                                <div className={scss.entrance}>
                                    <img src={markerorange} alt="" />
                                    <p>Entrance fees</p>
                                </div>
                                <div className={scss.gratuities}>
                                    <img src={markerorange} alt="" />
                                    <p>Gratuities</p>
                                </div>
                                <div className={scss.pickUp}>
                                    <img src={marker} alt="" />
                                    <p>Pick-up and drop off</p>
                                </div>
                                <div className={scss.professional}>
                                    <img src={marker} alt="" />
                                    <p>Professional guide</p>
                                </div>
                                <div className={scss.transport}>
                                    <img src={marker} alt="" />
                                    <p>Transport by air-conditioned</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={scss.tourProgram}>
                        <h4>Tour Program</h4>
                        <div className={scss.day1}>
                            <div className={scss.day_title}>
                                <div className={scss.day_line}></div>
                                <h6>Day 1</h6>
                            </div>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                        <div className={scss.day2}>
                            <div className={scss.day_title2}>
                                <div className={scss.day_line}></div>
                                <h6>Day 2</h6>
                            </div>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                        <div className={scss.day3}>
                            <div className={scss.day_title2}>
                                <div className={scss.day_line}></div>
                                <h6>Day 3</h6>
                            </div>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                    <div className={scss.social}>
                        <p>Share:</p>
                        <button className={scss.facebookk}> <img src={facebook} alt="" /> Facebook </button>
                        <button className={scss.insta}> <img src={insta} alt="" /> Instagram</button>
                        <button className={scss.in}> <img src={inn} alt="" /> LinkedIn</button>
                        <button className={scss.twit}> <img src={twit} alt="" /> Twitter</button>
                    </div>
                </div>
                <div className={scss.right}>
                    <div className={scss.form}>
                        <div className={scss.price}>
                            <h4 className={scss.official}>$199</h4>
                            <h4 className={scss.discount}>$119</h4>
                            <p>/Tour</p>
                        </div>
                        <div className={scss.information}>
                            <div className={scss.departure}>
                                {/* <img src={calendarInput} alt="" /> */}
                                <input className={scss.date} type="date" value='Departure day'/>
                            </div>
                            <div className={scss.guests}>
                                <img src={person} alt="" />
                                <input type="text" placeholder='Guests'/>
                            </div>
                        </div>
                        <div className={scss.information2}>
                            <div className={scss.service}>
                                <p className={scss.service_title}>Service charge</p>
                                <p className={scss.price_service}>$357</p>
                            </div>
                            <div className={scss.discount2}>
                                <p className={scss.discount_title}>Discount</p>
                                <p className={scss.price_discount}>-</p>
                            </div>
                        </div>
                    </div>
                    <div className={scss.liner}></div>
                    <div className={scss.bottom}>
                        <div className={scss.total}>
                            <h6 className={scss.total_title}>Total</h6>
                            <h6 className={scss.total_txt}>$357</h6>
                        </div>
                        <button className={scss.reserve}>Reserve</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TourDetails