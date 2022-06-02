import React, {FC, useMemo} from "react";
import "./filter.scss"
import {useAppSelector} from "../../../../../hooks/redux";
import {selectSearchFilter} from "../../../../../redux-modules/app/selectors";
import FilterItem from "./filter-item/FilterItem";

const Filter: FC = () => {
    const searchFilter = useAppSelector(selectSearchFilter);

    return useMemo(() => (
        <div className="filter">
            {searchFilter.map(
                ({type, id, isSelected}) => (
                    <FilterItem
                        isSelected={isSelected}
                        type={type}
                        key={id}
                    />
                ))}
        </div>
    ), [searchFilter]);
};

Filter.displayName = 'Filter';

export default Filter;