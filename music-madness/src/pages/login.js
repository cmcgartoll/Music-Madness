import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import MusicContext from '../context/MusicContext.js';
import {AUTH_ENDPOINT, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, RESPONSE_TYPE} from '../constants.js';
import Home from './home.js';
import './login.css';
import CustomButton from '../components/button/Button.js';

export default function Login() {
    const {artistData, setArtistData, token, setToken, trackData, setTrackData} = useContext(MusicContext);
  
    useEffect( () => {
        console.log('Login');
        const hash = window.location.hash;
        let token = "";
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"));
        }

        if (!token && hash ) {
            token = hash.substring(1).split("&").find((elem) => elem.startsWith('access_token')).split("=")[1]
            console.log(token);
            window.location.hash = "";
            sessionStorage.setItem("token", token);
            setToken(token);
        }
    })

    useEffect( () => {
        if (token){
            axios.get("https://api.spotify.com/v1/me/top/artists?limit=8&offset=0", {
                headers: {
                Authorization: `Bearer ${token}`
                }
            }).then((res) => setArtistData(
                res.data.items.map((artist, index) => (
                    {
                        "key": artist.id,
                        "name": artist.name,
                        "image": artist.images[0].url,
                        "seed": index+1,
                        "link":artist.external_urls.spotify,
                        "detail2":artist.genres[0]
                    }
                )))
            ).then(console.log(JSON.stringify(artistData)));
            axios.get("https://api.spotify.com/v1/me/top/tracks?limit=8", {
                headers: {
                Authorization: `Bearer ${token}`
                }
            }).then((res) => setTrackData(
                res.data.items.map((track, index) => (
                    {
                        "key": track.id,
                        "name": track.name,
                        "image": track.album.images[0].url,
                        "seed": index+1,
                        "link":track.external_urls.spotify,
                        "detail2": track.artists[0].name
                    }
                )))
            ).then(console.log(trackData));
        } 
    }, [token])

    return (
        <div className="App">
            {!token ?
                <div className='login-page'>
                    <p style={{fontWeight: 'bold'}}>welcome to music madness!</p>
                    <p style={{color: 'white'}}>log in to your spotify below to create a personalized bracket based on your top tracks and artists!</p>
                    <div className='login-button' >
                        <CustomButton text = 'log in to spotify' onClick={() => window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${encodeURIComponent('user-top-read')}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}/>
                    </div>
                </div>: 
                <Home/>
            }
        </div>
    );
    }
