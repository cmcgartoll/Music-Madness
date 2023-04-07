import React, {useContext} from 'react';
import './Header.css';
// import {require} from 'browserify';
import logo from "../../images/music-madness-logo.png";
import home from "../../images/home-icon.png";
import logoutIcon from "../../images/logout.png";
import MusicContext from "../../context/MusicContext";
import { Box } from '@mui/system';

export default function Header() {
    const {logout, token} = useContext(MusicContext);
    return (
        <div className="header">
            <div className="home-button">
                {token ? 
                <img className="home-icon" src={home} alt="home" onClick={() => window.location.reload()}/> :
                <></>
                }
            </div>
            <div className="header-logo">
                <img className="logo-img" src={logo} alt="logo"/>
            </div>
            <div className="logout-button">
                {token ?
                <img className="logout-icon" src={logoutIcon} alt="logout" onClick={logout}/> :
                <></>}
            </div>
            {/* <h1 className="header-title">Music Madness</h1> */}
        </div>
    )
}