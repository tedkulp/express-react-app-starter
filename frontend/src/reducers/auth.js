import { omit } from 'lodash';

const initialState = {
    authToken: undefined,
    refreshToken: undefined,
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'auth/setAuthToken':
            return {
                ...state,
                authToken: action.payload,
            };
        case 'auth/setRefreshToken':
            return {
                ...state,
                refreshToken: action.payload,
            };
        case 'auth/clearAuthToken':
            return omit(state, ['authToken']);
        case 'auth/clearRefreshToken':
            return omit(state, ['refreshToken']);
        default:
            return state;
    }
}
