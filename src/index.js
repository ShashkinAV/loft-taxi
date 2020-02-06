import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import './index.css';
import App from './App';
import { theme } from 'loft-taxi-mui-theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { AuthProvider } from './context/AuthContext';
import {Provider} from 'react-redux';
import createStore from './store';
import history from './history';

const store = createStore();

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={history}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
