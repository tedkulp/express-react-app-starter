import axios from 'axios';

const API_URL = '/api';

const performRequest = (method, url, params, auth, config = {}) => {
    const body = method === 'get' ? 'params' : 'data';
    const requestConfig = {
        ...config,
        method,
        url,
        baseURL: API_URL,
        [body]: params || {},
    };

    requestConfig.headers = {
        Accept: 'application/json',
    };

    // eslint-disable-next-line no-undef
    if (auth && localStorage.id_token) {
        // eslint-disable-next-line no-undef
        requestConfig.headers.Authorization = localStorage.id_token;
    }

    return axios.request(requestConfig);
};

export function req(method, url, params, config) {
    return performRequest(method, url, params, false, config);
}

export function authReq(method, url, params, config) {
    return performRequest(method, url, params, true, config);
}

export default {
    req,
    authReq,
};
