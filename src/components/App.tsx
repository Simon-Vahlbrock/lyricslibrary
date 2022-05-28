import React from 'react';
import useLocalStorage from 'use-local-storage';
import './app.scss';


function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    return (
        <div className="app" data-theme={theme}>
            <span>Easy Darkmode and Themes in React</span>
            <button onClick={switchTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
            </button>
        </div>
    );
}

export default App;
