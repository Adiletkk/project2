import React from 'react'
import  scss from './Breadcrumd.module.scss'
import icon from '../../assets/Image/detail_icon.png'

function Breadcrumb() {
  return (
    <div className='container'>
        <div className={scss.wrapper}>
            <p>Home</p>
            <img src={icon} alt="" />
            <p>Tours</p>
            <img src={icon} alt="" />
            <p className={scss.city}>Estonia City Tour</p>
        </div>
    </div>
  )
}

export default Breadcrumb