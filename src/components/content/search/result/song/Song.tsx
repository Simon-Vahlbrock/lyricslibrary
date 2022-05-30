import React, {FC, useCallback, useMemo} from "react";
import './song.scss'
import {Song as SongType} from "../../../../../types/songs";
import TapWrapper from "../../../../shared/tap-wrapper/TapWrapper";
import {Heart} from "react-ionicons";

interface SongProps {
    creator: SongType["creator"];
    title: SongType["title"];
    isFavourite: SongType["isFavourite"];
}

const Song: FC<SongProps> = ({title, creator, isFavourite}) => {
    const handleOnClick = useCallback(() => console.log('Switch to Song'), []);

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
                        <Heart color="#29fd53" />
                    </div>
                )}
            </div>
        </TapWrapper>
    ), [creator, handleOnClick, isFavourite, title]);
};

Song.displayName = 'Song';

export default Song;