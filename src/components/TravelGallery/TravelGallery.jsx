import React from 'react'
import scss from './TravelGallery.module.scss'
import img1 from '../../assets/Image/travelGallery_img.png'
import img2 from '../../assets/Image/travel_gallery1.png'
import img3 from '../../assets/Image/travel_gallery2.png'
import img4 from '../../assets/Image/travel_gallery3.png'
import img5 from '../../assets/Image/travel_gallery4.png'


function TravelGallery() {
  return (
    <div className='container'>
        <div className={scss.wrapper}>
            <img src={img1} alt="" />
            <div className={scss.pack}>
              <div className={scss.pack_top}>
                <img src={img2} alt="" />
                <img src={img3} alt="" />
              </div>
              <div className={scss.pack_bottom}>
                <img src={img4} alt="" />
                <img src={img5} alt="" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default TravelGallery