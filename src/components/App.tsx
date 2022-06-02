import React, {useMemo} from 'react';
import './app.scss';
import {useAppSelector} from "../hooks/redux";
import {selectDialogContentType, selectTheme} from "../redux-modules/app/selectors";
import Content from "./content/Content";
import Navigation from "./navigation/Navigation";
import Dialog from "./dialog/Dialog";
import {AnimatePresence, motion} from "framer-motion";


const App = () => {
    const theme = useAppSelector(selectTheme);

    const dialogContentType = useAppSelector(selectDialogContentType);

    return useMemo(() => (
        <AnimatePresence>
            <div className="app" data-theme={theme}>
                <Content/>
                <Navigation/>
                {dialogContentType && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}

                        key="modal"
                    >
                        <Dialog/>
                    </motion.div>
                )}
            </div>
        </AnimatePresence>
    ), [dialogContentType, theme]);
}

export default App;
