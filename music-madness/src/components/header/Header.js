import React, {useContext} from 'react';
import './Header.css';
// import {require} from 'browserify';
import logo from "../../images/music-madness-logo.png";
import home from "../../images/home-icon.png";
import logoutIcon from "../../images/profile-icon.png";
import MusicContext from "../../context/MusicContext";

export default function Header() {
    const {logout} = useContext(MusicContext);
    return (
        <div className="header">
            <div className="home-button">
                <img className="home-icon" src={home} alt="home" onClick={() => window.location.reload()}/>
            </div>
            <div className="header-logo">
                <img className="logo-img" src={logo} alt="logo"/>
            </div>
            <div className="logout-button">
                <img className="logout-icon" src={logoutIcon} alt="logout" onClick={logout}/>
            </div>
            {/* <h1 className="header-title">Music Madness</h1> */}
        </div>
    )
}