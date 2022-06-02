import React, {FC} from "react";
import {motion} from "framer-motion";

interface MountWrapperProps {
    children: React.ReactNode
}

const MountWrapper: FC<MountWrapperProps> = ({children}) => (
    <motion.div
        key="modal"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
    >
        {children}
    </motion.div>
);

MountWrapper.displayName = 'MountWrapper';

export default MountWrapper;

