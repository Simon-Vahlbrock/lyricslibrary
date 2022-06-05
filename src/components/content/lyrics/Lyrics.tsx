import React, {FC, useMemo, useState} from "react";
import {useAppSelector} from "../../../hooks/redux";
import {selectSelectedSong} from "../../../redux-modules/songs/selectors";
import "./lyrics.scss"
import LyricsHeader from "./lyrics-header/LyricsHeader";
import LyricsText from "./lyrics-text/LyricsText";

const Lyrics: FC = () => {
    const [yOffset, setYOffset] = useState(0);
    const selectedSong = useAppSelector(selectSelectedSong);

    return useMemo(() => (
        <div className="lyrics">{selectedSong ? (
            <div className="lyrics__selected">
                <LyricsHeader yOffset={yOffset}/>
                <LyricsText lyrics={selectedSong.lyrics} setYOffset={setYOffset}/>
            </div>
        ) : (
            <div className="lyrics__not-selected">Please Select A Song</div>
        )}</div>
    ), [selectedSong, yOffset]);
}

Lyrics.displayName = 'Lyrics';

export default Lyrics