import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Theme} from "../../types/app";
import {getInitialTheme} from "../../utils/app";

export interface AppState {
    theme: Theme;
}

const initialState: AppState = {
    theme: getInitialTheme()
};

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setTheme(state, {payload}: PayloadAction<Theme>) {
            localStorage.setItem('theme', JSON.stringify(payload));
            state.theme = payload;
        }
    }
});

export const {setTheme} = slice.actions;
export const appReducer = slice.reducer;
