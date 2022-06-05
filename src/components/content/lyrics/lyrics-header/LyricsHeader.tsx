import React, {FC, useMemo} from "react";
import './lyricsHeader.scss';
import {useAppSelector} from "../../../../hooks/redux";
import {selectSelectedSong} from "../../../../redux-modules/songs/selectors";
import TapWrapper from "../../../shared/tap-wrapper/TapWrapper";
import {Heart, HeartOutline, PlayCircleOutline, ShareSocial} from "react-ionicons";
import {MAX_OFFSET} from "../../../../constants/app";

interface LyricsHeaderProps {
    yOffset: number;
}

const LyricsHeader: FC<LyricsHeaderProps> = ({yOffset}) => {
    const selectedSong = useAppSelector(selectSelectedSong);

    const titleMargin = useMemo(() => {
        let offset = 35 - (yOffset / 2);

        return offset < 0 ? `0` : `${offset}px`;
    }, [yOffset]);

    const titleWidth = useMemo(() => {
        const scrolledDistance = yOffset / MAX_OFFSET + (yOffset !== 0 ? 0.2 : 0);

        const offset = 22 * (scrolledDistance <= 1 ? scrolledDistance : 1);

        return `calc(90vw - ${offset}vw)`;
    }, [yOffset]);

    const creatorMargin = useMemo(() => {
        let offset = 80 - (yOffset);

        return offset < 0 ? `0` : `${offset}px`;
    }, [yOffset]);

    const creatorOpacity = useMemo(() => {
        const scrolledDistance = yOffset / MAX_OFFSET * 1.7;

        return `${1 - (scrolledDistance < 1 ? scrolledDistance : 1)}`;
    }, [yOffset]);

    return useMemo(() => (
        <div className="lyrics-header" style={{height: `calc(15vh - ${yOffset}px)`}}>
            <div className="lyrics-header__icons">
                <div className="lyrics-header__icons__icon"
                     onClick={() => window.open(selectedSong?.link)?.focus()}>
                    <TapWrapper>
                        <PlayCircleOutline cssClasses="ion-icon"/>
                    </TapWrapper>
                </div>
                <div className="lyrics-header__icons__icon">{
                    selectedSong?.isFavourite ? (
                        <Heart color="#29fd53" cssClasses="ion-icon"/>
                    ) : (
                        <HeartOutline cssClasses="ion-icon"/>
                    )
                }</div>
                <div className="lyrics-header__icons__icon">
                    <ShareSocial cssClasses="ion-icon"/>
                </div>
            </div>
            <div
                className="lyrics-header__title"
                style={{marginTop: titleMargin, width: titleWidth}}
            >
                {selectedSong?.title}
            </div>
            <div 
                className="lyrics-header__creator"
                style={{marginTop: creatorMargin, opacity: creatorOpacity}}
            >
                {selectedSong?.creator}
            </div>
        </div>
    ), [yOffset, selectedSong?.isFavourite, selectedSong?.title, selectedSong?.creator, selectedSong?.link, titleMargin, titleWidth, creatorMargin, creatorOpacity]);
}

LyricsHeader.displayName = 'LyricsHeader';

export default LyricsHeader;