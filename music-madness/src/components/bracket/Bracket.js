import React, {useContext, useEffect, useState} from "react";
import MusicContext from "../../context/MusicContext";
import './Bracket.css';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

export default function Bracket(props) {
    const  seedOrder = (data) => {
        const fakeMusicObject = {
            "key": null,
            "name": null,
            "image": '../../images/null_img.png',
            "seed": null
        };
        return [data[0], data[7], data[1], data[6], data[2], data[5], data[3], data[4], fakeMusicObject, fakeMusicObject, fakeMusicObject, fakeMusicObject, fakeMusicObject, fakeMusicObject, fakeMusicObject];
    }
    const [trackOrArtist, setTrackOrArtist] = useState(props.trackOrArtist);
    const {artistData, trackData} = useContext(MusicContext);
    const [seededData, setSeededData] = useState(trackOrArtist === 'artist' ? artistData : trackData);
    const [bracketData, setBracketData] = useState(seedOrder(seededData));
    const [bracketIndex, setBracketIndex] = useState(0);

    const iterateMatchup = (musicObject) => {
        let localBracketData = bracketData;
        localBracketData[Math.floor(bracketIndex/2)+8] = musicObject;
        setBracketIndex(bracketIndex+2);
        setBracketData(localBracketData);
        console.log(bracketData);
        console.log(bracketIndex);
    }

    return (

        <div>
            <div className="bracket-page" id="bracket-page">
                {bracketData[14].name === null ?
                    <div className="matchup">
                        <div className="matchup-item">
                            <div className="matchup-image" onClick={() => iterateMatchup(bracketData[bracketIndex])}>
                                <img className="img"
                                style={{width:"100%"}}
                                src={bracketData[bracketIndex].image}
                                alt={bracketData[bracketIndex].name}
                                />
                            </div>
                            <div className="description">
                                <p className="seed">{bracketData[bracketIndex].seed}</p>
                                <p className="name">{bracketData[bracketIndex].name}</p>
                            </div>
                        </div>
                        <div className="matchup-item">
                            <div className="matchup-image" onClick={() => iterateMatchup(bracketData[bracketIndex+1])}>
                                <img className="img"
                                style={{width:"100%"}}
                                src={bracketData[bracketIndex+1].image}
                                alt={bracketData[bracketIndex+1].name}
                                />
                            </div>
                            <div className="description">
                                <p className="seed">{bracketData[bracketIndex+1].seed}</p>
                                <p className="name">{bracketData[bracketIndex+1].name}</p>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="matchup-winner">
                        {/* <h1>Winner!</h1> */}
                        <div className="winner-description">
                            <p className="winner-pretext">your winner:</p>
                            <p className="winner-text">{bracketData[bracketData.length-1].name}</p>
                        </div>
                        <div className="image">
                            <img className="img"
                            // style={{width:"100%"}}
                            src={bracketData[bracketData.length-1].image}
                            alt={bracketData[bracketData.length-1].name}
                            />
                        </div>
                        {/* <div className="description">
                            <p className="seed">{bracketData[bracketData.length-1].seed}</p>
                            <p className="name">{bracketData[bracketData.length-1].name}</p>
                        </div> */}
                    </div>
                }
                <div className="bracket">
                    <div className = "bracketColumnEight">
                        {bracketData.slice(0, 4).map(musicObject => (
                        <div className='bracket-item'>
                            <div className='image'>
                                <img className="img"
                                style={{width:"100%"}}
                                src={musicObject.image}
                                alt={musicObject.name}
                                />
                            </div>
                            <div className='description'>
                                <p className="seed">{musicObject.seed} </p>
                                <p className="name">{musicObject.name}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className = "bracketColumnFour">
                        <div className='bracket-item-four-left'>
                            {bracketData[8].name !== null  ?<>
                            <div className='image'>
                                <img className="img"
                                // style={{width:"100%"}}
                                src={bracketData[8].image}
                                alt={bracketData[8].name}
                                />
                            </div>
                            {/* <div className='description'>
                                <p className="seed">{musicObject.seed}</p>
                                <p className="name">{musicObject.name}</p>
                            </div> */}
                            </>:<Box className='fake-four' sx={{backgroundColor: 'transparent',}}></Box>}
                        </div>
                        <div className='bracket-item-two-left'>
                            {bracketData[12].name !== null  ?<>
                            <div className='image'>
                                <img className="img"
                                // style={{width:"100%"}}
                                src={bracketData[12].image}
                                alt={bracketData[12].name}
                                />
                            </div>
                            {/* <div className='description'>
                                <p className="seed">{musicObject.seed}</p>
                                <p className="name">{musicObject.name}</p>
                            </div> */}
                            </>:<Box className='fake-two' sx={{backgroundColor: 'transparent',}}></Box>}
                        </div>
                        <div className='bracket-item-four-left'>
                            {bracketData[9].name !== null  ?<>
                            <div className='image'>
                                <img className="img"
                                // style={{width:"100%"}}
                                src={bracketData[9].image}
                                alt={bracketData[9].name}
                                />
                            </div>
                            {/* <div className='description'>
                                <p className="seed">{musicObject.seed}</p>
                                <p className="name">{musicObject.name}</p>
                            </div> */}
                            </>:<Box className='fake-four' sx={{backgroundColor: 'transparent',}}></Box>}
                        </div>
                    {/* {bracketData.slice(8, 10).map(musicObject => (
            
                            <div className='bracket-item'>
                                {musicObject.name !== null  ?<>
                                <div className='image'>
                                    <img className="img"
                                    style={{width:"100%"}}
                                    src={musicObject.image}
                                    alt={musicObject.name}
                                    />
                                </div>
                                <div className='description'>
                                    <p className="seed">{musicObject.seed}</p>
                                    <p className="name">{musicObject.name}</p>
                                </div>
                                </>:<Box sx={{backgroundColor: 'white',}}></Box>}
                            </div>
            
                        ))} */}
                    </div>
                    {/* <div className = "bracketColumnTwo">
                    {bracketData.slice(12, 13).map(musicObject => (
                        <div className='bracket-item'>
                            {musicObject.name !== null  ?<>
                            <div className='image'>
                                <img className="img"
                                style={{width:"100%"}}
                                src={musicObject.image}
                                alt={musicObject.name}
                                />
                            </div>
                            <div className='description'>
                                <p className="seed">{musicObject.seed}</p>
                                <p className="name">{musicObject.name}</p>
                            </div>
                            </>:<Box sx={{backgroundColor: 'white',}}></Box>}
                        </div>
                        ))}
                    </div> */}
                    {/* <div className = "bracketColumnTwo">
                    {bracketData.slice(13, 14).map(musicObject => (
                        <div className='bracket-item'>
                            {musicObject.name !== null  ?<>
                            <div className='image'>
                                <img className="img"
                                style={{width:"100%"}}
                                src={musicObject.image}
                                alt={musicObject.name}
                                />
                            </div>
                            <div className='description'>
                                <p className="seed">{musicObject.seed}</p>
                                <p className="name">{musicObject.name}</p>
                            </div>
                            </>:<Box sx={{backgroundColor: 'white',}}></Box>}
                        </div>
                        ))}
                    </div> */}
                    <div className = "bracketColumnFour">
                    <div className='bracket-item-four-right'>
                            {bracketData[10].name !== null  ?<>
                            <div className='image'>
                                <img className="img"
                                // style={{width:"100%"}}
                                src={bracketData[10].image}
                                alt={bracketData[10].name}
                                />
                            </div>
                            {/* <div className='description'>
                                <p className="seed">{musicObject.seed}</p>
                                <p className="name">{musicObject.name}</p>
                            </div> */}
                            </>:<Box className='fake-four'  sx={{backgroundColor: 'transparent',}}></Box>}
                        </div>
                        <div className='bracket-item-two-right'>
                            {bracketData[13].name !== null  ?<>
                            <div className='image'>
                                <img className="img"
                                // style={{width:"75%"}}
                                src={bracketData[13].image}
                                alt={bracketData[13].name}
                                />
                            </div>
                            {/* <div className='description'>
                                <p className="seed">{musicObject.seed}</p>
                                <p className="name">{musicObject.name}</p>
                            </div> */}
                            </>:<Box className='fake-two' sx={{backgroundColor: 'transparent',}}></Box>}
                        </div>
                        <div className='bracket-item-four-right'>
                            {bracketData[11].name !== null  ?<>
                            <div className='image'>
                                <img className="img"
                                // style={{width:"100%"}}
                                src={bracketData[11].image}
                                alt={bracketData[11].name}
                                />
                            </div>
                            {/* <div className='description'>
                                <p className="seed">{musicObject.seed}</p>
                                <p className="name">{musicObject.name}</p>
                            </div> */}
                            </>:<Box className='fake-four' sx={{backgroundColor: 'transparent',}}></Box>}
                        </div>
                    {/* {bracketData.slice(10, 12).map(musicObject => (
                        <div className='bracket-item'>
                            {musicObject.name !== null  ?<>
                            <div className='image'>
                                <img className="img"
                                style={{width:"100%"}}
                                src={musicObject.image}
                                alt={musicObject.name}
                                />
                            </div>
                            <div className='description'>
                                <p className="seed">{musicObject.seed}</p>
                                <p className="name">{musicObject.name}</p>
                            </div>
                            </>:<Box sx={{backgroundColor: 'white',}}></Box>}
                        </div>
                        ))} */}
                    </div>
                    <div className = "bracketColumnEight">
                    {bracketData.slice(4, 8).map(musicObject => (
                        <div className='bracket-item'>
                            <div className='image'>
                                <img className="img"
                                style={{width:"100%"}}
                                src={musicObject.image}
                                alt={musicObject.name}
                                />
                            </div>
                            <div className='description'>
                                <p className="seed">{musicObject.seed} </p>
                                <p className="name">{musicObject.name}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}