import React, {FC, useCallback, useEffect, useMemo, useState} from 'react';
import './theme.scss';
import Card from "../../../shared/card/Card";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {selectTheme} from "../../../../redux-modules/app/selectors";
import {Theme as ThemeType} from '../../../../types/app'
import {setTheme} from "../../../../redux-modules/app/slice";
import {motion} from "framer-motion";

const Theme: FC = () => {
    const [isOn, setIsOn] = useState(false);

    const theme = useAppSelector(selectTheme);

    const dispatch = useAppDispatch();


    const toggleSwitch = useCallback(() => {
        dispatch(setTheme(isOn ? ThemeType.light : ThemeType.dark));
    }, [dispatch, isOn]);

    const spring = useMemo(() => ({
        type: "spring",
        stiffness: 700,
        damping: 30
    }), []);

    useEffect(() => {
        setIsOn(theme === ThemeType.dark);
    }, [theme]);

    return useMemo(() => (
        <div className="theme">
            <Card>
                <div className="theme__card">
                    <div className="theme__card__heading">
                        Theme
                    </div>
                    <div className="theme__card__content">
                        <div className="theme__card__content__switch" data-is-on={isOn} onClick={toggleSwitch}>
                            <motion.div className="theme__card__content__switch__handle" layout transition={spring}/>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    ), [isOn, spring, toggleSwitch])
};

Theme.displayName = 'Theme';

export default Theme
