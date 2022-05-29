import React, {FC, useCallback, useMemo} from 'react';
import './theme.scss';
import Card from "../../../shared/card/Card";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {selectTheme} from "../../../../redux-modules/app/selectors";
import clsx from "clsx";
import {Theme as ThemeType} from '../../../../types/app'
import {setTheme} from "../../../../redux-modules/app/slice";

const Theme: FC = () => {
    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();

    const lightClasses = useMemo(() => clsx('theme__card__content__theme', {
        'theme__card__content__theme--active': theme === ThemeType.light
    }), [theme]);

    const darkClasses = useMemo(() => clsx('theme__card__content__theme', {
        'theme__card__content__theme--active': theme === ThemeType.dark
    }), [theme]);

    const handleThemeChange = useCallback((newTheme: ThemeType) => {
        dispatch(setTheme(newTheme));
    }, [dispatch])

    return useMemo(() => (
        <div className="theme">
            <Card>
                <div className="theme__card">
                    <div className="theme__card__icon">
                        Theme
                    </div>
                    <div className="theme__card__content">
                        <div className={lightClasses} onClick={() => handleThemeChange(ThemeType.light)}>Light</div>
                        <div className={darkClasses} onClick={() => handleThemeChange(ThemeType.dark)}>Dark</div>
                    </div>
                </div>
            </Card>
        </div>
    ), [lightClasses, darkClasses, handleThemeChange])
};

Theme.displayName = 'Theme';

export default Theme
