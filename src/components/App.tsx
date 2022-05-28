import React, {useCallback, useMemo} from 'react';
import './app.scss';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {selectTheme} from "../redux-modules/app/selectors";
import {Theme} from "../types/app";
import {setTheme} from "../redux-modules/app/slice";


const App = () => {
    const theme = useAppSelector(selectTheme);

    const dispatch = useAppDispatch();

    const handleThemeSwitch = useCallback(() =>
        dispatch(setTheme(theme === Theme.dark ? Theme.light : Theme.dark)
        ), [dispatch, theme])

    return useMemo(() => (
        <div className="app" data-theme={theme}>
            <span>Easy Darkmode and Themes in React</span>
            <button onClick={handleThemeSwitch}>
                Switch to {theme === Theme.dark ? 'Dark' : 'Light'} Theme
            </button>
        </div>
    ), [theme, handleThemeSwitch]);
}

export default App;
