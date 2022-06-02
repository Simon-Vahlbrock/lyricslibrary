import React, {FC, useMemo} from 'react';
import './search.scss'
import Bar from "./bar/Bar";
import Result from "./result/Result";

const Search: FC = () =>
    useMemo(() => (
        <div className="search">
            <Bar/>
            <Result/>
        </div>
    ), []);

Search.displayName = 'Search';

export default Search;