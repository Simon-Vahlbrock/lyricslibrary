import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DialogContent, SearchFilter, SearchFilterNames, Tapp, Theme} from "../../types/app";
import {getInitialTheme} from "../../utils/app";

export interface AppState {
    theme: Theme;
    selectedTapp: Tapp;
    searchString: string;
    searchFilter: SearchFilter[];
    dialogContentType: DialogContent | null;
}

const initialState: AppState = {
    theme: getInitialTheme(),
    selectedTapp: 'related',
    searchString: '',
    searchFilter: [
        {id: 0, type: "all", isSelected: true},
        {id: 1, type: "songs", isSelected: false},
        {id: 2, type: "artists", isSelected: false},
    ],
    dialogContentType: null,
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
        },
        setSearchString(state, {payload}: PayloadAction<AppState['searchString']>) {
            state.searchString = payload
        },
        setSearchFilterSelectedState(state, {payload}: PayloadAction<SearchFilterNames>) {
            state.searchFilter = state.searchFilter.map(({type, id}) => ({
                id,
                type,
                isSelected: payload === type
            }))
        },
        setDialogContentType(state, {payload}: PayloadAction<DialogContent | null>) {
            state.dialogContentType = payload;
        }
    }
});

export const {setTheme, setTapp, setSearchString, setSearchFilterSelectedState, setDialogContentType} = slice.actions;
export const appReducer = slice.reducer;
