import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

export const SignupForm = ({setRoute}) => {
  const classes = useStyles();
  const goToLoginForm = event => {
    event.preventDefault();
    setRoute("login");
  }

  return (
    <Card className={classes.card}>
      <form  onSubmit={()=>setRoute("Карта")}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant='h4' component='h1'>
              Регистрация
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <p>
              Уже зарегистрирован?{' '}
              <Link href="#" onClick={goToLoginForm}>
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