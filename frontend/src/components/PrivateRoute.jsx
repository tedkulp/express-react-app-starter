import React from 'react';
import { Route, Redirect } from 'react-router';

import { hasToken } from '../util/token';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => (hasToken() ? <Component {...props} /> : <Redirect to="/login" />)}
        />
    );
};

export default PrivateRoute;
