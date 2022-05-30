import React, {FC, useCallback, useMemo, CSSProperties} from 'react'
import './input.scss'
import {CloseOutline, SearchOutline} from "react-ionicons";
import {useAppDispatch, useAppSelector} from "../../../../../hooks/redux";
import {selectSearchString} from "../../../../../redux-modules/app/selectors";
import {setSearchString} from "../../../../../redux-modules/app/slice";
import TapWrapper from "../../../../shared/tap-wrapper/TapWrapper";

interface InputProps {
    styles?: CSSProperties
}

const Input: FC<InputProps> = ({styles}) => {
    const searchString = useAppSelector(selectSearchString);

    const dispatch = useAppDispatch();

    const handleOnChange = useCallback((event: React.FormEvent<HTMLInputElement>) =>
        dispatch(setSearchString(event.currentTarget.value)), [dispatch]);

    const handleIconClick = useCallback(() => dispatch(setSearchString('')), [dispatch]);

    return useMemo(() => (
        <div className="input" style={styles}>
            <input
                className="input__element"
                type="text"
                placeholder="Search for a song"
                autoFocus
                value={searchString}
                onChange={handleOnChange}
            />
            <div className="input__icon" onClick={handleIconClick} >
                <TapWrapper>
                    {searchString.length > 0 ? (
                        <CloseOutline cssClasses="input__icon__ion-icon"/>
                    ) : (
                        <SearchOutline cssClasses="input__icon__ion-icon"/>
                    )}
                </TapWrapper>
            </div>
        </div>
    ), [handleIconClick, handleOnChange, searchString, styles]);
};

Input.displayName = 'Input';

export default Input;