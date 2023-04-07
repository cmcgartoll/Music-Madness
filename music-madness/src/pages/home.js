import React, { useState, useEffect, useContext } from 'react';
import MusicContext from '../context/MusicContext.js';
import Bracket from '../components/bracket/Bracket.js';
import PreviewGrid from '../components/preview_grid/PreviewGrid.js';
import CustomButton from '../components/button/Button.js';
import spotify_logo from '../images/Spotify_Logo_RGB_Green.png'
import './home.css';

export default function Home() {
    const {artistData, setArtistData, trackData, setTrackData, logout} = useContext(MusicContext);
    const [trackOrArtist, setTrackOrArtist] = useState(null);
    const [makeBracket, setMakeBracket] = useState(false);

    return (
        <div>
            {trackOrArtist === null ?
                <div className='home-page'>
                    <div className='home-description'>
                        <p>you can make brackets from both your top tracks and top artist!</p>
                        <p>choose one below and get started!</p>
                    </div>
                    <div className='music-buttons'>
                        <div className='track-button'>
                            <CustomButton text='track' onClick={() => {setTrackOrArtist('track')}}/>
                        </div>
                        <div className='artist-button'>
                            <CustomButton text='artist' onClick={() => {setTrackOrArtist('artist')}}/>
                        </div>
                    </div>
                </div>
            :
                <div>
                    {makeBracket? 
                        <Bracket trackOrArtist={trackOrArtist}/>:
                        <div className='preview-page'>
                            <PreviewGrid data={trackOrArtist === 'track' ?trackData:artistData}/>
                            <div className='start-bracket-button'>
                                <CustomButton  text="start the bracket!" onClick={() => {setMakeBracket(true)}}/>
                            </div>
                            <div className='spotify-logo-div'>
                                <img className='spotify-logo' src={spotify_logo} alt='Spotify'/>
                            </div>
                        </div> 
                    }
                </div>
                
            }
        </div>
    )
}