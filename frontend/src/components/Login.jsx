import React, { useEffect } from 'react';
import { push } from 'connected-react-router';
import { Formik, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { req } from '../util/api';
import { setToken } from '../util/token';
import { injectAsyncReducer } from '../util/store';

injectAsyncReducer('login', (state = {}, action) => {
    switch (action.type) {
        case 'login/login':
            return {
                ...state,
                loggedIn: true,
                errorMessage: undefined,
            };
        case 'login/error':
            return {
                ...state,
                errorMessage: action.payload,
            };
        case 'socket-action/SOMEMSG':
            return {
                ...state,
                incomingMessage: action.message,
            };
        default:
            return state;
    }
});

const doLogin = params => {
    return (_dispatch, _getState) => {
        return req('post', '/login', params).then(response => {
            const user = response.data;
            if (response.status > 399) {
                return Promise.reject(user);
            }

            return user;
        });
    };
};

const useStyles = makeStyles(theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginLeft: theme.spacing(6),
        marginRight: theme.spacing(6),
        marginBottom: theme.spacing(6),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    },
    submit: {
        marginTop: `${theme.spacing(3)}px !important`,
    },
}));

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)) {
        errors.username = 'Invalid email address';
    }
    return errors;
};

const Login = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const errorMessage = useSelector(state => get(state, 'login.errorMessage'));

    useEffect(() => {
        dispatch({ type: 'nav/hideNav' });
    }, []);

    const onSubmit = (values, { setSubmitting }) => {
        dispatch(doLogin(values))
            .then(({ token }) => {
                setToken(token);
                setSubmitting(false);
                dispatch(push('/'));
            })
            .catch(err => {
                setSubmitting(false);
                dispatch({
                    type: 'login/error',
                    payload: get(err, 'response.data', 'There was an error logging in'),
                });
            });
    };

    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                {errorMessage && (
                    <Typography color="error" component="h2" variant="h6">
                        {errorMessage}
                    </Typography>
                )}
                <Formik
                    initialValues={{ username: '', password: '' }}
                    validate={validate}
                    onSubmit={onSubmit}
                >
                    {({
                        values,
                        // errors,
                        // touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit} onReset={handleReset}>
                            <FormControl fullWidth>
                                <Field
                                    type="email"
                                    name="username"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.username}
                                    component={TextField}
                                    margin="normal"
                                    label="Email Address"
                                    fullWidth
                                />
                            </FormControl>
                            <FormControl fullWidth>
                                <Field
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    component={TextField}
                                    margin="normal"
                                    label="Password"
                                    fullWidth
                                />
                            </FormControl>
                            <div style={{ textAlign: 'right' }}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    disabled={isSubmitting}
                                    className={classes.submit}
                                >
                                    Sign in
                                </Button>
                            </div>
                        </form>
                    )}
                </Formik>
            </Paper>
        </main>
    );
};

export default Login;
