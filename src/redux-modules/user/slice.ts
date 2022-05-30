import {User} from "../../types/user";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface UserState {
    user?: User;
}

const initialState: UserState = {};

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, {payload}: PayloadAction<User>) {
            state.user = payload;
        }
    }
});

export const {setUser} = slice.actions;
export const userReducer = slice.reducer;
