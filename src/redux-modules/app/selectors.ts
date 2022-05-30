import type {RootState} from '../store';
import type {AppState} from './slice';

export const selectAppState = (state: RootState): AppState => state.app;

export const selectTheme = (state: RootState): AppState["theme"] => selectAppState(state).theme;

export const selectSelectedTapp = (state: RootState): AppState["selectedTapp"] => selectAppState(state).selectedTapp;

export const selectSearchString = (state: RootState): AppState['searchString'] => selectAppState(state).searchString;

export const selectSearchFilter = (state: RootState): AppState["searchFilter"] => selectAppState(state).searchFilter;
