import React, {FC, useMemo} from 'react';
import './content.scss';
import {useAppSelector} from "../../hooks/redux";
import {selectSelectedTapp} from "../../redux-modules/app/selectors";
import Settings from "./settings/Settings";

const Content: FC = () => {
    const tapp = useAppSelector(selectSelectedTapp);

    const content = useMemo(() => {
        switch (tapp) {
            case "donated":
                return <div/>
            case "other":
                return <div/>
            case "related":
                return <div/>
            case "search":
                return <div/>
            case "settings":
                return <Settings/>
            default:
                return <div/>
        }
    }, [tapp]);
    return useMemo(() => (
        <div className="content">
            {content}
        </div>
    ), [content])
};

Content.displayName = 'Content';

export default Content
