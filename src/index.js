import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import {
  ThemeProvider
} from '@material-ui/core/styles';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { configureStore, history } from './store';
import theme from './config/MuiTheme'
import './scss/index.scss';
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
