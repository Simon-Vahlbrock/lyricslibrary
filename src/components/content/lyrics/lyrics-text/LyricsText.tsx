import React, {FC, useCallback, useMemo, useState} from "react";
import './lyricsText.scss';
import {Song} from "../../../../types/songs";
import {MAX_OFFSET} from "../../../../constants/app";

interface LyricsTextProps {
    lyrics: Song["lyrics"];
    setYOffset: React.Dispatch<React.SetStateAction<number>>;
}

const LyricsText: FC<LyricsTextProps> = ({lyrics, setYOffset}) => {
    const [textOffset, setTextOffset] = useState(0);

    const scrollListener = useCallback((event: React.UIEvent<HTMLElement>) => {
        const yOffset = event.currentTarget.scrollTop;

        setYOffset(yOffset < MAX_OFFSET ? yOffset : MAX_OFFSET);
        setTextOffset(yOffset < MAX_OFFSET ? yOffset : MAX_OFFSET);

    }, [setYOffset]);

    return useMemo(() => (
        <div className="lyrics-text">
            <div
                className="lyrics-text__content"
                onScroll={scrollListener}
                style={{height: `calc(85vh - 70px + ${textOffset}px)`}}
            >
                {lyrics}
            </div>
        </div>
    ), [lyrics, scrollListener, textOffset]);
}

LyricsText.displayName = 'LyricsText';

export default LyricsText;