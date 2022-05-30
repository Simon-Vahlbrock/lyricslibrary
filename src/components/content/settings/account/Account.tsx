import React, {FC, useMemo} from 'react';
import './account.scss';
import Card from "../../../shared/card/Card";
import {useAppSelector} from "../../../../hooks/redux";
import {selectUser} from "../../../../redux-modules/user/selectors";
import TapWrapper from "../../../shared/tap-wrapper/TapWrapper";

const Account: FC = () => {
    const user = useAppSelector(selectUser)

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
                                    <div className="account__card__content__sign-in">Sign In</div>
                                </TapWrapper>
                                <TapWrapper>
                                    <div className="account__card__content__sign-up">Sign Up</div>
                                </TapWrapper>
                            </>
                        )}
                    </div>
                </div>
            </Card>
        </div>
    ), [user])
};

Account.displayName = 'Account';

export default Account
