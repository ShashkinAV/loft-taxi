import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {LoginForm} from './LoginForm';
import { Logo } from 'loft-taxi-mui-theme';

const BackgroundURL = '../background.jpg';

const useStyles = makeStyles(theme => ({
  login: {
    width: '100%',
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundImage: `url(${BackgroundURL})`,
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

export const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.login}>
       <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center">
          <Grid item xs={3}>
            <Logo white animated />
          </Grid>
          <Grid item xs={3}>
            <LoginForm/>
          </Grid>
       </Grid>
    </div>
  );
}

Login.propTypes = {
  setRoute: PropTypes.func
};
