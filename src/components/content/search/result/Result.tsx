import React, {FC, useMemo} from 'react';
import './result.scss'
import {useAppSelector} from "../../../../hooks/redux";
import {selectFilteredSongs} from "../../../../redux-modules/songs/selectors";
import Song from "./song/Song";
import {selectSearchString} from "../../../../redux-modules/app/selectors";

const Result: FC = () => {
    const songs = useAppSelector(selectFilteredSongs);
    const searchString = useAppSelector(selectSearchString)

    return useMemo(() => (
        <div className="result">
            {songs && songs.length > 0 ? (
                songs?.map((song) => (
                    <Song
                        key={song.id}
                        song={song}
                    />
                ))
            ) : (
                <div className="result__no-content">{searchString.length < 3 ? (
                    <div>Search For A Song</div>
                ) : (
                    <div>Nothing matches your input</div>
                )}</div>
            )}
        </div>
    ), [searchString.length, songs]);
};

Result.displayName = 'Result';

export default Result;