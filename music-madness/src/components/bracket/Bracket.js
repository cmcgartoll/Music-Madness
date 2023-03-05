import React, {useContext, useEffect, useState} from "react";
import MusicContext from "../../context/MusicContext";
import './Bracket.css';
import { Link } from "react-router-dom";

export default function Bracket(props) {
    const  seedOrder = (data) => {
        return [data[0], data[7], data[1], data[6], data[2], data[5], data[3], data[4]];
    }
    const [trackOrArtist, setTrackOrArtist] = useState(props.trackOrArtist);
    const {artistData, trackData} = useContext(MusicContext);
    const [seededData, setSeededData] = useState(trackOrArtist === 'artist' ? artistData : trackData);
    const [bracketData, setBracketData] = useState(seedOrder(seededData));
    const [bracketIndex, setBracketIndex] = useState(0);

    const iterateMatchup = (musicObject) => {
        let localBracketData = bracketData;
        localBracketData.push(musicObject);
        setBracketIndex(bracketIndex+2);
        setBracketData(localBracketData);
        console.log(bracketData);
        console.log(bracketIndex);
    }
    
    useEffect(() => {
        console.log(bracketData);
    }, [bracketData])

    return (
        <div>
            <h1>{trackOrArtist} Bracket!</h1>
            {bracketData.length < 15 ? 
                <div>
                    <div className="matchup">
                        <div className="matchup-left">
                            <div className="matchup-left-image" onClick={() => iterateMatchup(bracketData[bracketIndex])}>
                                <img
                                style={{width:"100%"}}
                                src={bracketData[bracketIndex].image}
                                alt={bracketData[bracketIndex].name}
                                />
                            </div>
                            <h5>{bracketData[bracketIndex].seed}</h5>
                            <h5>{bracketData[bracketIndex].name}</h5>
                        </div>
                        <div className="matchup-right">
                            <div className="matchup-right-image" onClick={() => iterateMatchup(bracketData[bracketIndex+1])}>
                                <img
                                style={{width:"100%"}}
                                src={bracketData[bracketIndex+1].image}
                                alt={bracketData[bracketIndex+1].name}
                                />
                            </div>
                            <h5>{bracketData[bracketIndex+1].seed}</h5>
                            <h5>{bracketData[bracketIndex+1].name}</h5>
                        </div>
                    </div>
                </div>
                :
                <div className="final-bracket">
                    <h1>Winner!</h1>
                    <div className="matchup-winner">
                        <img
                        style={{width:"100%"}}
                        src={bracketData[bracketData.length-1].image}
                        alt={bracketData[bracketData.length-1].name}
                        />
                    </div>
                    <h5>{bracketData[bracketData.length-1].seed}</h5>
                    <h5>{bracketData[bracketData.length-1].name}</h5>
                </div>
            }
            <div className="bracket">
                <div className = "bracketLeftColumn1">
                    <div>
                        <div>
                            <img
                            style={{width:"25%"}}
                            src={bracketData[0].image}
                            alt={bracketData[0].name}
                            />
                        </div>
                        <h5>{bracketData[0].seed}</h5>
                        <h5>{bracketData[0].name}</h5>
                    </div>
                    <div>
                        <div>
                            <img
                            style={{width:"25%"}}
                            src={bracketData[1].image}
                            alt={bracketData[1].name}
                            />
                        </div>
                        <h5>{bracketData[1].seed}</h5>
                        <h5>{bracketData[1].name}</h5>
                    </div>
                    <div>
                        <div>
                            <img
                            style={{width:"25%"}}
                            src={bracketData[2].image}
                            alt={bracketData[2].name}
                            />
                        </div>
                        <h5>{bracketData[2].seed}</h5>
                        <h5>{bracketData[2].name}</h5>
                    </div>
                    <div>
                        <div>
                            <img
                            style={{width:"25%"}}
                            src={bracketData[3].image}
                            alt={bracketData[3].name}
                            />
                        </div>
                        <h5>{bracketData[3].seed}</h5>
                        <h5>{bracketData[3].name}</h5>
                    </div>
                </div>
                <div className = "bracketLeftColumn2">
                    {bracketData.length > 8 ? 
                    <div>
                        <div>
                            <img
                            style={{width:"25%"}}
                            src={bracketData[8].image}
                            alt={bracketData[8].name}
                            />
                        </div>
                        <h5>{bracketData[8].seed}</h5>
                        <h5>{bracketData[8].name}</h5>
                    </div> : 
                    <></>}
                    {bracketData.length > 9 ? 
                    <div>
                        <div>
                            <img
                            style={{width:"25%"}}
                            src={bracketData[9].image}
                            alt={bracketData[9].name}
                            />
                        </div>
                        <h5>{bracketData[9].seed}</h5>
                        <h5>{bracketData[9].name}</h5>
                    </div>: 
                    <></>}
                </div>
                <div className = "bracketLeftColumn3">
                    {bracketData.length > 12 ? 
                    <div>
                        <div>
                            <img
                            style={{width:"25%"}}
                            src={bracketData[12].image}
                            alt={bracketData[12].name}
                            />
                        </div>
                        <h5>{bracketData[12].seed}</h5>
                        <h5>{bracketData[12].name}</h5>
                    </div> : 
                    <></>}
                </div>
                <div className = "bracketLeftColumn4">
                    {bracketData.length > 13 ? 
                    <div>
                        <div>
                            <img
                            style={{width:"25%"}}
                            src={bracketData[13].image}
                            alt={bracketData[13].name}
                            />
                        </div>
                        <h5>{bracketData[13].seed}</h5>
                        <h5>{bracketData[13].name}</h5>
                    </div> : 
                    <></>}
                </div>
                <div className = "bracketLeftColumn5">
                    {bracketData.length > 10 ? 
                    <div>
                        <div>
                            <img
                            style={{width:"25%"}}
                            src={bracketData[10].image}
                            alt={bracketData[10].name}
                            />
                        </div>
                        <h5>{bracketData[10].seed}</h5>
                        <h5>{bracketData[10].name}</h5>
                    </div> : 
                    <></>}
                    {bracketData.length > 11 ? 
                    <div>
                        <div>
                            <img
                            style={{width:"25%"}}
                            src={bracketData[11].image}
                            alt={bracketData[11].name}
                            />
                        </div>
                        <h5>{bracketData[11].seed}</h5>
                        <h5>{bracketData[11].name}</h5>
                    </div>: 
                    <></>}
                </div>
                <div className = "bracketLeftColumn6">
                    <div>
                        <div>
                            <img
                            style={{width:"25%"}}
                            src={bracketData[4].image}
                            alt={bracketData[4].name}
                            />
                        </div>
                        <h5>{bracketData[4].seed}</h5>
                        <h5>{bracketData[4].name}</h5>
                    </div>
                    <div>
                        <div>
                            <img
                            style={{width:"25%"}}
                            src={bracketData[5].image}
                            alt={bracketData[5].name}
                            />
                        </div>
                        <h5>{bracketData[5].seed}</h5>
                        <h5>{bracketData[5].name}</h5>
                    </div>
                    <div>
                        <div>
                            <img
                            style={{width:"25%"}}
                            src={bracketData[6].image}
                            alt={bracketData[6].name}
                            />
                        </div>
                        <h5>{bracketData[6].seed}</h5>
                        <h5>{bracketData[6].name}</h5>
                    </div>
                    <div>
                        <div>
                            <img
                            style={{width:"25%"}}
                            src={bracketData[7].image}
                            alt={bracketData[7].name}
                            />
                        </div>
                        <h5>{bracketData[7].seed}</h5>
                        <h5>{bracketData[7].name}</h5>
                    </div>
                </div>
            </div>
            <button onClick={() => window.location.reload()}>Back to {trackOrArtist === 'track' ? 'artist' : 'track'}</button>
        </div>
    );
}