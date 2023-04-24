import React, { createContext, useState, useEffect, } from "react";
import {AUTH_ENDPOINT, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, RESPONSE_TYPE} from '../constants.js';

const MusicContext = createContext();

export default MusicContext;

export const MusicProvider = ({children}) => {
    const [token, setToken] = useState(
        sessionStorage.getItem("token") || null
    );
    const [artistData, setArtistData] = useState([]);
    const [trackData, setTrackData] = useState([]);
    // const [bracketData, setBracketData] = useState([]);
    // const [trackOrArtist, setTrackOrArtist] = useState(null);

    const logout = () => {
        setToken(null);
        sessionStorage.removeItem("token");
        const spotifyLogoutWindow = window.open('https://accounts.spotify.com/en/logout', 'Spotify Logout', 'width=700,height=500,top=40,left=40')                                                                                                
        setTimeout(() => spotifyLogoutWindow.close(), 2000)
        // window.location.reload('false');
    }

    const login = () => {
        
    }

    const contextData = {
        token,
        setToken,
        artistData,
        setArtistData,
        trackData,
        setTrackData,
        // trackOrArtist, 
        // setTrackOrArtist,
        logout,
        login
    };

    return (
        <MusicContext.Provider value={contextData}>
            {children}
        </MusicContext.Provider>
    );
}