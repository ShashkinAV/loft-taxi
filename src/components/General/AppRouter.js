import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Map } from '../Map';
import { Login } from '../Login';
import { Signup } from '../Signup';
import { Profile } from '../Profile';
import { getAuth } from '../../modules/main'
import {shallowEqual, useSelector } from 'react-redux'

export const AppRouter = () => {
  const loginPath = '/login';

  const auth = useSelector(getAuth, shallowEqual);

  const PrivateRoute = ({ component: RouteComponent }) => (
    <Route
      render={routeProps =>
        auth.success ? <RouteComponent {...routeProps} /> : <Redirect to={loginPath} />
      }
    />
  );

  return (
    <Switch>
      <Route path={'/login'} component={Login}/>
      <Route path={'/signup'} component={Signup}/>
      <PrivateRoute path={'/map'} component={Map}/>
      <PrivateRoute path={'/profile'} component={Profile}/>
      <Redirect from={'/'} to={'login'}/>
    </Switch>
  );
}