import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

const Navbar = () => {

    const navRef = useRef()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY >= 80){
                navRef.current.classList.add('nav__dark')
            } else {
                navRef.current.classList.remove('nav__dark')
            }
        })
    }, [])

    return (
        <div ref={navRef} className='navbar'>
            <div className="navbar__left">
                <img src={logo} alt="" />
                <ul>
                    <li className='nav__link--point'>Home</li>
                    <li className='nav__link--nonpoint'>TV Shows</li>
                    <li className='nav__link--nonpoint'>Movies</li>
                    <li className='nav__link--nonpoint'>New & Popular</li>
                    <li className='nav__link--nonpoint'>My List</li>
                    <li className='nav__link--nonpoint'>Browse by Languages</li>
                </ul>
            </div>
            <div className="navbar__right">
                <img className="icons" src={search_icon} alt="" />
                <p className='nav__link--nonpoint'>Children</p>
                <img className="icons" src={bell_icon} alt="" />
                <div className="navbar__profile">
                    <img className="profile" src={profile_img} alt="" />
                    <img src={caret_icon} alt="" />
                    <div className="dropdown">
                        <p onClick={() => {logout()}}>Sign Out Of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar