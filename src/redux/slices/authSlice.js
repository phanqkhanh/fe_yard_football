import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: {
            userLogin: localStorage.getItem('user') || null,
            token: localStorage.getItem('token') || null,
            error: null,
        },
    },
    reducers: {
        //Đăng nhập
        loginStart: (setLoading) => {
            setLoading(true);
        },
        loginSuccess: (state, action) => {
            state.login.userLogin = action.payload;
            state.login.token = action.payload.token;
            state.login.error = null;
        },
        loginFail: (state, action) => {
            console.log(action);
            state.login.userLogin = null;
            state.login.error = action.payload.message;
        },
    },
});

export const { loginStart, loginSuccess, loginFail } = authSlice.actions;
export default authSlice.reducer;
