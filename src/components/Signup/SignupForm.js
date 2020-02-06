import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getRegister, fetchRegisterRequest } from '../../modules/main';
import {shallowEqual, useSelector, useDispatch} from 'react-redux';
import history from '../../history';


const useStyles = makeStyles(theme => ({
  card: {
    padding: 50,
    minWidth: 400,
    marginTop: 48,
    marginBottom: 48,
  },
  title: {
    fontSize: 36,
    fontWeight: 400,
    marginBottom: 30
  },
  btnGrid: {
    marginTop: 30
  }
}));

export const SignupForm = () => {
  const classes = useStyles();

  const register = useSelector(getRegister, shallowEqual);
  const registerAction = useSelector(fetchRegisterRequest, shallowEqual);

  const dispatch = useDispatch();
  
  const onSubmit = (event) => {
    event.preventDefault();

    dispatch({
      ...registerAction,
      payload: {
        email: event.target.email.value,
        password: event.target.password.value,
        name: event.target.name.value,
        surname: event.target.scondName.value,
      }
    })

    console.log(register);
  }

  if (register && register.success && JSON.parse(register.success) === true) {
    localStorage.setItem('authSuccess', register.success);
    localStorage.setItem('authToken', register.token);
    history.push('/map');
  }

  return (
    <Card className={classes.card}>
      <form  onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant='h4' component='h1'>
              Регистрация
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <p>
              Уже зарегистрирован?{' '}
              <Link to={'/login'} >
                Войти
              </Link>
            </p>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth required name="email" type="email" label="Адрес электронной почты"/>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6} >
              <TextField fullWidth required name="name" type="text" label="Имя" margin="normal"/>
            </Grid>
            <Grid item xs={6} >
              <TextField fullWidth required name="scondName" type="text" label="Фамилия" margin="normal"/>
            </Grid>
          </Grid>
          <Grid item xs={12} >
            <TextField fullWidth required name="password" type="password" label="Пароль" margin="normal"/>
          </Grid>
          <Grid item xs={12} align="right" className={classes.btnGrid}>
            <Button type="submit" variant="contained" color="primary" data-testid="buttonLogin">
              Зарегистрироваться
            </Button>
          </Grid>
        </Grid>
        
      </form>
    </Card>
  );
}