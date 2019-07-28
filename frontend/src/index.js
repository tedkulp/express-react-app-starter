import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { init } from './util/socket';
import configureStore from './util/store';
import { history } from './util/reducer';

import './index.scss';
import App from './App';

// muiStylesInstall();

init();

const store = configureStore();

const theme = createMuiTheme({ typography: { useNextVariants: true } });

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>
    </ThemeProvider>,
    // eslint-disable-next-line no-undef
    document.getElementById('root')
);
