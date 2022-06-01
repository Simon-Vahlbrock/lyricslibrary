import React, {FC, useMemo} from "react";
import './signUp.scss';

const SignUp: FC = () => {
    return useMemo(() => (
        <div className="sign-up">SignUp</div>
    ), []);
}

SignUp.displayName = 'SignUp';

export default SignUp;