import React, {FC, useCallback, useMemo} from 'react';
import './navigation.scss';
import {
    CashOutline,
    HeartOutline,
    MusicalNotes,
    SearchOutline,
    SettingsOutline
} from "react-ionicons";
import clsx from "clsx";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {selectSelectedTapp} from "../../redux-modules/app/selectors";
import {Tapp} from "../../types/app";
import {setTapp} from "../../redux-modules/app/slice";

const Navigation: FC = () => {
    const tapp = useAppSelector(selectSelectedTapp);

    const dispatch = useAppDispatch();

    const homeClasses = clsx('list', {
        'active': tapp === 'related'
    });

    const searchClasses = clsx('list', {
        'active': tapp === 'search'
    });

    const settingsClasses = clsx('list', {
        'active': tapp === 'settings'
    });

    const cashClasses = clsx('list', {
        'active': tapp === 'donated'
    });

    const otherClasses = clsx('list', {
        'active': tapp === 'other'
    });

    const handleSelectedTappUpdate = useCallback((value: Tapp) => {
        dispatch(setTapp(value));
    }, [dispatch])

    return useMemo(() => (
        <>
            <div className="navigation">
                <div className="wrapper">
                    <ul>
                        <li className={homeClasses} onClick={() => handleSelectedTappUpdate('related')}>
                            <div>
                                <span className="icon">
                                    <HeartOutline/>
                                </span>
                                <span className="text">Home</span>
                            </div>
                        </li>
                        <li className={searchClasses} onClick={() => handleSelectedTappUpdate('search')}>
                            <div>
                                <span className="icon">
                                    <SearchOutline/>
                                </span>
                                <span className="text">Search</span>
                            </div>
                        </li>
                        <li className={settingsClasses} onClick={() => handleSelectedTappUpdate('settings')}>
                            <div>
                                <span className="icon">
                                    <SettingsOutline/>
                                </span>
                                <span className="text">Settings</span>
                            </div>
                        </li>
                        <li className={cashClasses} onClick={() => handleSelectedTappUpdate('donated')}>
                            <div>
                                <span className="icon">
                                    <CashOutline/>
                                </span>
                                <span className="text">Donate</span>
                            </div>
                        </li>
                        <li className={otherClasses} onClick={() => handleSelectedTappUpdate('other')}>
                            <div>
                                <span className="icon">
                                    <MusicalNotes/>
                                </span>
                                <span className="text">Other</span>
                            </div>
                        </li>
                        <div className="indicator"/>
                    </ul>
                </div>
            </div>
        </>
    ), [homeClasses, cashClasses, otherClasses, searchClasses, settingsClasses, handleSelectedTappUpdate])
};

Navigation.displayName = 'Navigation';

export default Navigation
