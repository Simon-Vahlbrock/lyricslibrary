import React, {FC, useMemo} from 'react';
import './content.scss';
import {useAppSelector} from "../../hooks/redux";
import {selectSelectedTapp} from "../../redux-modules/app/selectors";
import Settings from "./settings/Settings";
import Search from "./search/Search";
import {AnimatePresence} from "framer-motion";
import MountWrapper from "../shared/mount-wrapper/MountWrapper";

const Content: FC = () => {
    const tapp = useAppSelector(selectSelectedTapp);

    return useMemo(() => (
        <AnimatePresence>
            <div className="content">
                {tapp === "related" && (
                    <MountWrapper><div/></MountWrapper>
                )}
                {tapp === 'search' && (
                    <MountWrapper><Search/></MountWrapper>
                )}
                {tapp === "settings" && (
                    <MountWrapper><Settings/></MountWrapper>
                )}
                {tapp === "donated" && (
                    <MountWrapper><div/></MountWrapper>
                )}
                {tapp === "other" && (
                    <MountWrapper><div/></MountWrapper>
                )}
            </div>
        </AnimatePresence>
    ), [tapp])
};

Content.displayName = 'Content';

export default Content
