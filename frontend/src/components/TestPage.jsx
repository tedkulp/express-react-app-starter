import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const TestPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'nav/showNav' });
    }, []);

    return (
        <>
            <h1>Hi!</h1>
        </>
    );
};

export default TestPage;
