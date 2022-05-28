import React, {useMemo} from 'react';
import './app.scss';
import {useAppSelector} from "../hooks/redux";
import {selectTheme} from "../redux-modules/app/selectors";
import Content from "./content/Content";
import Navigation from "./navigation/Navigation";


const App = () => {
    const theme = useAppSelector(selectTheme);

    return useMemo(() => (
        <div className="app" data-theme={theme}>
            <Content/>
            <Navigation/>
        </div>
    ), [theme]);
}

export default App;
