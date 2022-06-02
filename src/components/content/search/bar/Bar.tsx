import React, {FC, useMemo} from 'react';
import './bar.scss'
import Input from "./input/Input";
import Filter from "./filter/Filter";

const Bar: FC = () =>
    useMemo(() => (
        <div className="bar">
            <Input styles={{marginTop: "24px"}}/>
            <Filter/>
        </div>
    ), []);

Bar.displayName = 'Bar';

export default Bar;