import axios from 'axios';
import { loginFail, loginStart, loginSuccess } from '../../redux/slices/authSlice';
import { del, post } from '../api_method';

export const loginUser = async (user, dispatch, navigate, setLoading) => {
    setLoading(true);
    const URL = '/user/login';
    try {
        const res = await post(URL, user);
        if (res.code == 200) {
            dispatch(loginSuccess(res.data));
            localStorage.setItem('token', res.data.access_token);
            localStorage.setItem('user', JSON.stringify(res.data));
            navigate('/');
        } else {
            localStorage.setItem('token', 'null');
            localStorage.setItem('user', 'null');
            dispatch(loginFail(res));
        }
    } catch (error) {
        console.log(error);
    }
    setLoading(false);
};

export const logOutUser = async (navigate) => {
    const URL = '/user/logout';
    try {
        const res = await del(URL);
        console.log(res);

        if (res.code == 200) {
            localStorage.setItem('token', null);
            localStorage.setItem('user', null);
            navigate('/dang-nhap');
        }
    } catch (error) {}
};
