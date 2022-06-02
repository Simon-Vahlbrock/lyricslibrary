import React, {FC, useCallback, useMemo} from "react";
import './song.scss'
import {Song as SongType} from "../../../../../types/songs";
import TapWrapper from "../../../../shared/tap-wrapper/TapWrapper";
import {Heart} from "react-ionicons";
import {useAppDispatch} from "../../../../../hooks/redux";
import {setSelectedSongId} from "../../../../../redux-modules/songs/slice";
import {setTapp} from "../../../../../redux-modules/app/slice";

interface SongProps {
    song: SongType
}

const Song: FC<SongProps> = ({song}) => {
    const {creator, id, title, isFavourite} = song;

    const dispatch = useAppDispatch();

    const handleOnClick = useCallback(() => {
        dispatch(setSelectedSongId(id));
        dispatch(setTapp("lyrics"));
    }, [dispatch, id]);

    return useMemo(() => (
        <TapWrapper scale={0.9}>
            <div className="song" onClick={handleOnClick}>
                <div className="song__image">Image</div>
                <div className="song__info">
                    <div className="song__info__title">
                        {title}
                    </div>
                    <div className="song__info__creator">
                        {creator}
                    </div>
                </div>
                {isFavourite && (
                    <div className="song__icon">
                        <Heart color="#29fd53"/>
                    </div>
                )}
            </div>
        </TapWrapper>
    ), [creator, handleOnClick, isFavourite, title]);
};

Song.displayName = 'Song';

export default Song;