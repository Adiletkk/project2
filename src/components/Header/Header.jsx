import React from 'react'
import scss from './Header.module.scss'
import logo from '../../assets/icon/zonelogo.png'
import search from '../../assets/icon/search_header.png'
import world from '../../assets/icon/world_header.png'


function Header() {
    return (
        <div className='container'>
            <header>
                <div className={scss.left}>
                    <img src={logo} alt="" />
                    <a href="">Home</a>
                    <a href="">Components</a>
                    <div className={scss.dropdown}>
                        <button className={scss.dropbtn}>Pages</button>
                        <div className={scss.content}>
                            <a href="">List</a>
                            <a href="">Details</a>
                            <a href="">Checkout</a>
                            <a href="">Blog</a>
                            <a href="">Blog-Details</a>
                            <a href="">About</a>
                            <a href="">Contact</a>
                        </div>
                    </div>
                    <a className={scss.left_a} href="">Documentation</a>
                </div>
                <div className={scss.right}>
                    <img src={search} alt="" />
                    <img className={scss.world} src={world} alt="" />
                    <div className={scss.line}></div>
                    <a className={scss.right_a} href="">Login</a>
                    <button>Join Us</button>
                </div>
            </header>
        </div>
    )
}

export default Header