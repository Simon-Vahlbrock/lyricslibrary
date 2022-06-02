import {RootState} from "../store";
import {UserState} from "./slice";

export const selectUserState = (state: RootState): UserState => state.user;

export const selectUser = (state: RootState): UserState['user'] => selectUserState(state)?.user;