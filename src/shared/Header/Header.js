import React from 'react'
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Logo } from 'loft-taxi-mui-theme';
import Button from '@material-ui/core/Button';
import { AppConsumer } from '../../App';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1
  }
}));

export const Header = ({setRoute}) => {
  const classes = useStyles();
  
  return (
    <AppConsumer>
      {AppContext => {

      const onClick = () => {
        AppContext.logout();
      }

      return (
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h6" color='inherit' className={classes.grow}>
            <Logo/>
          </Typography>
          <Button color="inherit" onClick={() => setRoute("Карта")}>Карта</Button>
          <Button color="inherit" onClick={() => setRoute("Профиль")}>Профиль</Button>
          <Button color="inherit" onClick={onClick}>Выйти</Button>
        </Toolbar>
      </AppBar>
      )}}
    </AppConsumer>
  );
}

Header.propTypes = {
  setRoute: PropTypes.func
};
