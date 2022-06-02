import React, {FC, useCallback, useMemo} from 'react';
import './account.scss';
import Card from "../../../shared/card/Card";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {selectUser} from "../../../../redux-modules/user/selectors";
import TapWrapper from "../../../shared/tap-wrapper/TapWrapper";
import {setDialogContentType} from "../../../../redux-modules/app/slice";

const Account: FC = () => {
    const user = useAppSelector(selectUser);

    const dispatch = useAppDispatch();
    
    const handleSignInClick = useCallback(() => (dispatch(setDialogContentType('Sign In'))), [dispatch]);
    const handleSignUpClick = useCallback(() => (dispatch(setDialogContentType('Sign Up'))), [dispatch]);
    
    return useMemo(() => (
        <div className="account">
            <Card>
                <div className="account__card">
                    <div className="account__card__heading">
                        Account
                    </div>
                    <div className="account__card__content">
                        {user ? (
                            <div>Logged In as {user?.name}</div>
                        ) : (
                            <>
                                <TapWrapper>
                                    <div onClick={handleSignInClick} className="account__card__content__sign-in">Sign In</div>
                                </TapWrapper>
                                <TapWrapper>
                                    <div onClick={handleSignUpClick} className="account__card__content__sign-up">Sign Up</div>
                                </TapWrapper>
                            </>
                        )}
                    </div>
                </div>
            </Card>
        </div>
    ), [handleSignInClick, handleSignUpClick, user])
};

Account.displayName = 'Account';

export default Account
