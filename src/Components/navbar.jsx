import React from 'react';
import logo from '../Static/logo192.png'
import '../Static/navbar.css'

export default function Navbar(props){
    return(
        <nav className='navbar'>
            <div className='logo-container'>
                <img className='nav-logo' src={logo} alt='logo'></img>
                <h2 className='nav-name'>Quizzical</h2>
            </div>
        </nav>
    )
}