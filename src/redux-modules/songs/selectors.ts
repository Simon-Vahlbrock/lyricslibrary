import {RootState} from "../store";
import {SongsState} from "./slice";
import {createSelector} from "@reduxjs/toolkit";
import {selectActiveSearchFilter, selectSearchString} from "../app/selectors";

export const selectSongsState = (state: RootState): SongsState => state.songs;

export const selectRecentSongs = (state: RootState): SongsState["recentSongs"] => selectSongsState(state).recentSongs;

export const selectFavouriteSongs = (state: RootState): SongsState["favouriteSongs"] => selectSongsState(state).favouriteSongs;

export const selectSongsForSearch = (state: RootState): SongsState["songsForSearch"] => selectSongsState(state).songsForSearch;

export const selectFilteredSongs = createSelector(
    [selectActiveSearchFilter, selectSearchString, selectSongsForSearch, selectFavouriteSongs],
    (searchFilter, searchString, songs, favouriteSongs) => {
        const type = searchFilter?.type;

        if (type && searchString.length >= 2) {
            return songs?.filter(({creator, title}) => {
                return (title.toLowerCase().includes(searchString.toLowerCase()) && (type === 'all' || type === 'songs'))
                    || (creator.toLowerCase().includes(searchString.toLowerCase()) && (type === 'all' || type === 'artists'));
            });
        } else {
            return [];
        }

    })
