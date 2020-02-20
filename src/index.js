import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { theme } from 'loft-taxi-mui-theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { AuthProvider } from './context/AuthContext';
import createStore from './store';
import history from './history';
import './index.css';
import App from './App';

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
