import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar__left">
                <img src={logo} alt="" />
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>
            <div className="navbar__right">
                <img className="icons" src={search_icon} alt="" />
                <p>Children</p>
                <img className="icons" src={bell_icon} alt="" />
                <div className="navbar__profile">
                    <img className="profile" src={profile_img} alt="" />
                    <img src={caret_icon} alt="" />
                    <div className="dropdown">
                        <p>Sign Out Of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar