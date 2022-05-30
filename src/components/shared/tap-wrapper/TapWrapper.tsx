import {motion} from 'framer-motion';
import React, {FC} from 'react'

interface TapWrapperProps {
    children: React.ReactNode;
    scale?: number;
}

const TapWrapper: FC<TapWrapperProps> = ({children, scale}) => (
    <motion.div whileTap={{scale: scale ?? 0.8}}>
        {children}
    </motion.div>
);

TapWrapper.displayName = 'TapWrapper';

export default TapWrapper;