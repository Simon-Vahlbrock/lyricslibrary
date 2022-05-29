import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Tapp, Theme} from "../../types/app";
import {getInitialTheme} from "../../utils/app";

export interface AppState {
    theme: Theme;
    selectedTapp: Tapp
}

const initialState: AppState = {
    theme: getInitialTheme(),
    selectedTapp: 'related'
};

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setTheme(state, {payload}: PayloadAction<Theme>) {
            localStorage.setItem('theme', JSON.stringify(payload));
            state.theme = payload;
        },
        setTapp(state, {payload}: PayloadAction<Tapp>) {
            state.selectedTapp = payload;
        }
    }
});

export const {setTheme, setTapp} = slice.actions;
export const appReducer = slice.reducer;
