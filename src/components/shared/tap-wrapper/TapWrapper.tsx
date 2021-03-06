import {motion} from 'framer-motion';
import React, {FC} from 'react'

interface TapWrapperProps {
    children: React.ReactNode;
    scale?: number;
    className?: string;
}

const TapWrapper: FC<TapWrapperProps> = ({className, children, scale}) => (
    <motion.div whileTap={{scale: scale ?? 0.8}} className={className}>
        {children}
    </motion.div>
);

TapWrapper.displayName = 'TapWrapper';

export default TapWrapper;