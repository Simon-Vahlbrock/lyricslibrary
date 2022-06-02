import React, {FC, useCallback, useMemo} from "react";
import TapWrapper from "../../../../../shared/tap-wrapper/TapWrapper";
import './filterItem.scss'
import {SearchFilter} from "../../../../../../types/app";
import clsx from "clsx";
import {useAppDispatch} from "../../../../../../hooks/redux";
import {setSearchFilterSelectedState} from "../../../../../../redux-modules/app/slice";

interface FilterItemProps {
    type: SearchFilter["type"];
    isSelected: SearchFilter["isSelected"];
}

const FilterItem: FC<FilterItemProps> = ({type, isSelected}) => {
    const dispatch = useAppDispatch();
    
    const classNames = useMemo(() => clsx('filter-item', {
        'filter-item__selected': isSelected
    }), [isSelected]);
    
    const handleClick = useCallback(() => dispatch(setSearchFilterSelectedState(type)), [dispatch, type]);

    return useMemo(() => (
        <TapWrapper>
            <div className={classNames} onClick={handleClick}>
                <div>{type}</div>
            </div>
        </TapWrapper>
    ), [classNames, handleClick, type]);
};

FilterItem.displayName = 'FilterItem';

export default FilterItem;