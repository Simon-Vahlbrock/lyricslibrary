import {motion} from 'framer-motion';
import React, {FC} from 'react'

interface TapWrapperProps {
    children: React.ReactNode
}

const TapWrapper: FC<TapWrapperProps> = ({children}) => (
    <motion.div whileTap={{scale: 0.8}}>
        {children}
    </motion.div>
);

TapWrapper.displayName = 'TapWrapper';

export default TapWrapper;