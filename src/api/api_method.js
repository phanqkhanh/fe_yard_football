import axios from 'axios';
// import { decodeData } from "./function/function_helper";
// axios.defaults.adapter = require('../../node_modules/axios/lib/adapters/xhr');
// import adapter from '../../node_modules/axios/lib/adapters/xhr';

const axiosApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    validateStatus: function (status) {
        return status >= 200 && status <= 401;
    },
});

axiosApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        console.log(token);
        config.headers.Authorization = 'Bearer ' + token;
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

axiosApi.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            if (response.data.status === 400) {
                try {
                    const refresh_token = localStorage.getItem('refresh_token');
                    axios
                        .post(process.env.REACT_APP_CALL_API_URL + '/quan-ly/lam-moi-token', {
                            refresh_token,
                        })
                        .then((res) => {
                            if (res.data.status === 200) {
                                localStorage.setItem('token', response.data.access_token);
                                localStorage.setItem('refresh_token', response.data.refresh_token);
                            }
                        });
                } catch (error) {}
            }
            if (response.status == 401 || response.data.code == 401) {
                // localStorage.setItem("checkToken", 'false')
                // dispatchEvent(new Event("storage"));
            } else {
                // localStorage.setItem("checkToken", 'true')
                // dispatchEvent(new Event("storage"));
            }
            return response.data;
        }
        return response;
    },
    (err) => {
        Promise.reject(err);
    },
);

export async function getWithParams(url, data) {
    return await axiosApi.get(url, { ...data }).then((response) => response);
}

export async function get(url) {
    return await axiosApi.get(url).then((response) => response);
}

export async function post(url, data) {
    return axiosApi.post(url, { ...data }).then((response) => response);
}

export async function put(url, data) {
    return axiosApi.put(url, { ...data }).then((response) => response);
}

export async function del(url) {
    return await axiosApi.delete(url).then((response) => response);
}

const config = {
    headers: { 'content-type': 'multipart/form-data' },
};

export async function postImg(url, data) {
    return axiosApi.post(url, data, config).then((response) => response);
}
