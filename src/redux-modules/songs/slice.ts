import {Song} from "../../types/songs";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface SongsState {
    songsForSearch?: Song[];
    favouriteSongs?: Song[];
    recentSongs?: Song[];
}

const initialState: SongsState = {
    songsForSearch: [
        {id: 0, creator: 'Simon', lyrics: 'Hey, hey', title: 'Der Profi', isFavourite: true},
        {id: 1, creator: 'Jens', lyrics: 'Der Weg ist toll', title: 'Der Weg', isFavourite: false},
        {id: 2, creator: 'Mika', lyrics: 'Ups tada', title: 'Magic', isFavourite: true},
        {id: 3, creator: 'Reika', lyrics: 'Whatever makes you laught', title: 'Have Fun', isFavourite: false},
        {id: 4, creator: 'Rees', lyrics: 'Hello There der Profi ist da', title: 'Heute in aller Frische', isFavourite: false},
        {id: 5, creator: 'Felix', lyrics: 'Hey, hey', title: 'Lieder', isFavourite: false},
        {id: 6, creator: 'Jan', lyrics: 'Der Weg ist toll', title: 'Das Leben', isFavourite: true},
        {id: 7, creator: 'Ernst', lyrics: 'Ups tada', title: 'Freude', isFavourite: false},
        {id: 8, creator: 'Horst', lyrics: 'Whatever makes you laught', title: 'Gerne wieder', isFavourite: true},
        {id: 9, creator: 'Bella', lyrics: 'Hello There der Profi ist da', title: 'Leben lassen', isFavourite: false},
        {id: 10, creator: 'Lisa', lyrics: 'Hey, hey', title: 'Heier', isFavourite: false},
        {id: 11, creator: 'Bart', lyrics: 'Der Weg ist toll', title: 'Der lebende Wicht', isFavourite: true},
        {id: 12, creator: 'Falka', lyrics: 'Ups tada', title: 'Magic', isFavourite: false},
        {id: 13, creator: 'Frederike', lyrics: 'Whatever makes you laught', title: 'Immer der Gleiche', isFavourite: true},
        {id: 14, creator: 'Julian', lyrics: 'Hello There der Profi ist da', title: 'Ein Hoch', isFavourite: true},
    ]
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