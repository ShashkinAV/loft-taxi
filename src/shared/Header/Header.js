import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Logo } from 'loft-taxi-mui-theme';
import Button from '@material-ui/core/Button';
import { fetchAuthRequest } from '../../modules/main';
import {shallowEqual, useSelector, useDispatch} from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1
  },
  headerLink: {
    textDecoration: "none"
  }
}));

export const Header = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const authAction = useSelector(fetchAuthRequest, shallowEqual);

  const onClick = () => {
    localStorage.setItem('authSuccess', false);

    dispatch({
      ...authAction,
      payload: {
        email: null,
        password: null
      }
    });
  }
  
  return (
    <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h6" color='inherit' className={classes.grow}>
            <Logo/>
          </Typography>
          <Button color="inherit">
            <Link to="/map" className={classes.headerLink}>Карта</Link>
          </Button>
          <Button color="inherit">
            <Link to="/profile" className={classes.headerLink}>Профиль</Link>
          </Button>
          <Button id={'LogoutButton'} color="inherit" onClick={onClick}>
            <Link to="/login" className={classes.headerLink}>Выйти</Link>
          </Button>
        </Toolbar>
      </AppBar>
  );
}

Header.propTypes = {
  setRoute: PropTypes.func
};
