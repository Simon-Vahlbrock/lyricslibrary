import {Song} from "../../types/songs";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {songs} from "../../constants/song";

export interface SongsState {
    songsForSearch?: Song[];
    favouriteSongs?: Song[];
    recentSongs?: Song[];
}

const initialState: SongsState = {
    songsForSearch: songs
};

const slice = createSlice({
    name: 'songs',
    initialState,
    reducers: {
        setSongsForSearch(state, {payload}: PayloadAction<Song[]>) {
            state.songsForSearch = payload;
        },
        setFavouriteSongs(state, {payload}: PayloadAction<Song[]>) {
            state.favouriteSongs = payload;
        },
        setRecentSongs(state, {payload}: PayloadAction<Song[]>) {
            state.recentSongs = payload;
        }
    }
});

export const {setSongsForSearch, setFavouriteSongs, setRecentSongs} = slice.actions;
export const songsReducer = slice.reducer;