import type {RootState} from '../store';
import type {AppState} from './slice';

export const selectAppState = (state: RootState): AppState => state.app;

export const selectTheme = (state: RootState): AppState["theme"] => selectAppState(state).theme;
