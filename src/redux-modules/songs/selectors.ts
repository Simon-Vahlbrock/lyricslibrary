import {RootState} from "../store";
import {SongsState} from "./slice";

export const selectSongsState = (state: RootState): SongsState => state.songs;

export const selectSongs = (state: RootState): SongsState["songs"] => selectSongsState(state).songs;