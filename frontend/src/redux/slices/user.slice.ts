import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: {
        username: '',
        email: '',
        about: ''
    }
}

export const appInfoSlice = createSlice({
    name: "userInfo",
    initialState: initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
        },
        resetUserInfo: (state) => {
            state = initialState;
        }
    },
});

export const { setUserInfo, resetUserInfo } = appInfoSlice.actions;

export default appInfoSlice.reducer;