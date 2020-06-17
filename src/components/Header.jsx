import React from 'react';
import logo from '../assets/static/icons8-lluvia-48.png';
import '../assets/styles/Header.css'

const Header = () => (
    <header className="header">
        <img className="header_img" src={logo} alt="logo"/>
        <h1>Weather app</h1>

    </header>
);

export default Header;