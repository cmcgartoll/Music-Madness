import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import MusicContext from '../context/MusicContext.js';
import {AUTH_ENDPOINT, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, RESPONSE_TYPE} from '../src/constants.js';

export default function Login() {
//   const [token, setToken] = useState("");
  const {artistData, setArtistData, token, trackData, setTrackData} = useContext(MusicContext)
//   const [artistData, setArtistData] = useState([]);
//   const [trackData, setTrackData] = useState([]);
//   const [trackOrArtist, setTrackOrArtist] = useState(null);
  
  useEffect( () => {
    const hash = window.location.hash;
    let token = "";
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }

    if (!token && hash ) {
      token = hash.substring(1).split("&").find((elem) => elem.startsWith('access_token')).split("=")[1]
      console.log(token);
      window.location.hash = "";
      localStorage.setItem("token", token);
      setToken(token);
    }
  }, [])

  useEffect( () => {
    if (token){
      axios.get("https://api.spotify.com/v1/me/top/artists?limit=8&offset=0", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((res) => setArtistData(res.data.items)
      ).then(console.log(JSON.stringify(artistData)));
      axios.get("https://api.spotify.com/v1/me/top/tracks?limit=8", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((res) => setTrackData(res.data.items)
      ).then(console.log(JSON.stringify(trackData)));
    } 
  }, [token])

  const onClick = () => {
    
  }

  return (
    <div className="App">
      {!token ?
        <header>
          <h1>Music Madness</h1>
          <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${encodeURIComponent('user-read-private user-library-read user-top-read')}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify </a>
        </header>: 
        <>

      }
    </div>
  );
}
