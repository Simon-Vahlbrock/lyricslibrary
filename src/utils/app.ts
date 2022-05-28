import {Theme} from "../types/app";

export const getInitialTheme = () => {
    const localStorageTheme = localStorage.getItem('theme');

    if (localStorageTheme) {
        return JSON.parse(localStorageTheme) as Theme;
    } else {
        return window.matchMedia('(prefers-color-scheme: 1)').matches ? Theme.dark : Theme.light;
    }
}
