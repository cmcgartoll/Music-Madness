import React, { useState, useEffect, useContext } from 'react';
import MusicContext from '../context/MusicContext.js';
import Bracket from '../components/bracket/Bracket.js';
import PreviewGrid from '../components/preview_grid/PreviewGrid.js';

export default function Home() {
    const {artistData, setArtistData, trackData, setTrackData, logout} = useContext(MusicContext);
    const [trackOrArtist, setTrackOrArtist] = useState(null);
    const [makeBracket, setMakeBracket] = useState(false);

    return (
        <div>
            {trackOrArtist === null ?
                <div>
                    <button onClick={() => {setTrackOrArtist('track')}}>Track</button>
                    <button onClick={() => {setTrackOrArtist('artist')}}>Artist</button>
                </div>
            :
                <div>
                    {makeBracket? 
                        <Bracket trackOrArtist={trackOrArtist}/>:
                        <div>
                            {trackOrArtist === 'track' ?
                                <div>
                                    <PreviewGrid data={trackData}/>
                                    <button onClick={() => {setTrackOrArtist(null)}}>Back</button>
                                    <button onClick={() => {setMakeBracket(true)}}>Rate the Bracket!</button>
                                </div> :
                                <div>
                                    <PreviewGrid data={artistData}/>
                                    <button onClick={() => {setTrackOrArtist(null)}}>Back</button>
                                    <button onClick={() => {setMakeBracket(true)}}>Rate the Bracket!</button>
                                </div>
                            }
                            
                        </div>
                    }
                </div>
                
            }
            <div>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    )
}