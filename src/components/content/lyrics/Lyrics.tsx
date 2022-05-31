import React, {FC, useMemo} from "react";
import {useAppSelector} from "../../../hooks/redux";
import {selectSelectedSong} from "../../../redux-modules/songs/selectors";
import "./lyrics.scss"
import {Heart, HeartOutline, PlayCircleOutline, ShareSocial} from "react-ionicons";

const Lyrics: FC = () => {
    const selectedSong = useAppSelector(selectSelectedSong);

    return useMemo(() => (
        <div className="lyrics">{selectedSong ? (
            <div className="lyrics__selected">
                <div className="lyrics__selected__head">
                    <div className="lyrics__selected__head__icons">
                        <div className="lyrics__selected__head__icons__icon">
                            <PlayCircleOutline cssClasses="ion-icon"/>
                        </div>
                        <div className="lyrics__selected__head__icons__icon">{
                            selectedSong.isFavourite ? (
                                <Heart color="#29fd53" cssClasses="ion-icon"/>
                            ) : (
                                <HeartOutline cssClasses="ion-icon"/>
                            )
                        }</div>
                        <div className="lyrics__selected__head__icons__icon">
                            <ShareSocial cssClasses="ion-icon"/>
                        </div>
                    </div>
                    <div className="lyrics__selected__head__title">{selectedSong.title}</div>
                    <div className="lyrics__selected__head__creator">{selectedSong.creator}</div>
                </div>
                <div className="lyrics__selected__text">
                    <div className="lyrics__selected__text__content">
                        {selectedSong.lyrics}
                    </div>
                </div>
            </div>
        ) : (
            <div className="lyrics__not-selected">Please Select A Song</div>
        )}</div>
    ), [selectedSong]);
}

Lyrics.displayName = 'Lyrics';

export default Lyrics