import React, {FC, useMemo} from "react";
import './signIn.scss';

const SignIn: FC = () => {
    return useMemo(() => (
        <div className="sign-in">SignIn</div>
    ), []);
}

SignIn.displayName = 'SignIn';

export default SignIn;