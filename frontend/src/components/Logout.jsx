import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import { clearToken } from '../util/token';

const Logout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'nav/hideNav' });
    }, []);

    clearToken();
    dispatch(push('/'));

    return <></>;
};

export default Logout;
