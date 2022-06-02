import React, {FC, useCallback, useMemo} from "react";
import './dialog.scss';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {selectDialogContentType} from "../../redux-modules/app/selectors";
import {setDialogContentType} from "../../redux-modules/app/slice";
import SignUp from "./sign-up/SignUp";
import SignIn from "./sign-in/SignIn";

const Dialog: FC = () => {
    const dialogContentType = useAppSelector(selectDialogContentType);

    const dispatch = useAppDispatch();

    const handleCloseDialog = useCallback(() => dispatch(setDialogContentType(null)), [dispatch]);

    const content = useMemo(() => {
        switch (dialogContentType) {
            case 'Sign Up':
                return <SignUp/>
            case 'Sign In':
                return <SignIn/>
            default:
                return <div/>
        }
    }, [dialogContentType])

    return useMemo(() => (
        <div className="dialog">
            <div className="dialog__top" onClick={handleCloseDialog}/>
            <div className="dialog__mid">
                <div className="dialog__mid__left" onClick={handleCloseDialog}/>
                <div className="dialog__mid__content">
                    {content}
                </div>
                <div className="dialog__mid__right" onClick={handleCloseDialog}/>
            </div>
            <div className="dialog__bottom" onClick={handleCloseDialog}/>
        </div>

    ), [content, handleCloseDialog]);
}

Dialog.displayName = 'Dialog';

export default Dialog;
