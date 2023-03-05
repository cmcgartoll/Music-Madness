import React, {useContext, useEffect, useState} from "react";
import MusicContext from "../../context/MusicContext";

export default function Bracket(props) {
    const [artistOrTrack] = useState(props.artistOrTrack);
    const [artistData, trackData] = useContext(MusicContext);
    const [seededData, setSeededData] = useContext(artistOrTrack === 'artist' ? artistData : trackData);

    return null;
}