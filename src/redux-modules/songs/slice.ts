import {Song} from "../../types/songs";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface SongsState {
    songs?: Song[];
}

const initialState: SongsState = {};

const slice = createSlice({
    name: 'songs',
    initialState,
    reducers: {
        setSongs(state, {payload}: PayloadAction<Song[]>) {
            state.songs = payload;
        }
    }
});

export const {setSongs} = slice.actions;
export const songsReducer = slice.reducer;