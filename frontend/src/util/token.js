/* eslint-disable no-undef */
import { get, has, isUndefined } from 'lodash';

import { getDispatch, getStore } from './store';

const TOKEN_KEY_NAME = 'id_token';

export function getToken() {
    const store = getStore();
    if (store && has(store.getState(), 'auth.token')) {
        return get(store.getState(), 'auth.token');
    }

    if (sessionStorage) {
        if (sessionStorage.getItem(TOKEN_KEY_NAME)) {
            return sessionStorage.getItem(TOKEN_KEY_NAME);
        }
    }

    if (localStorage) {
        if (localStorage.getItem(TOKEN_KEY_NAME)) {
            return localStorage.getItem(TOKEN_KEY_NAME);
        }
    }

    return undefined;
}

export function hasToken() {
    return !isUndefined(getToken());
}

export function setToken(token) {
    const dispatch = getDispatch();
    dispatch({
        type: 'auth/setAuthToken',
        payload: token,
    });

    if (sessionStorage) {
        sessionStorage.setItem(TOKEN_KEY_NAME, token);
    }

    if (localStorage) {
        localStorage.setItem(TOKEN_KEY_NAME, token);
    }
}

export function clearToken() {
    const dispatch = getDispatch();
    dispatch({
        type: 'auth/clearAuthToken',
    });

    if (sessionStorage) {
        sessionStorage.removeItem(TOKEN_KEY_NAME);
    }

    if (localStorage) {
        localStorage.removeItem(TOKEN_KEY_NAME);
    }
}
