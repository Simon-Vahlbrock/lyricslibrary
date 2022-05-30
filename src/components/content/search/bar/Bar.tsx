import React, {FC, useMemo} from 'react';
import {useAppDispatch} from "../../../../hooks/redux";
import './bar.scss'
import Input from "./input/Input";

const Bar: FC = () => {

    const dispatch = useAppDispatch();

    return useMemo(() => (
        <div className="bar">
            <Input styles={{marginTop: "2vh"}}/>
        </div>
    ), []);
};

Bar.displayName = 'Bar';

export default Bar;