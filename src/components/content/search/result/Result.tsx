import React, {FC, useMemo} from 'react';
import './result.scss'

const Result: FC = () => {
    const temp = 0;

    return useMemo(() => (
        <div className="result">Result</div>
    ), []);
};

Result.displayName = 'Result';

export default Result;