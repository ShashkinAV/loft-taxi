import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { AppConsumer } from '../../App';

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

export const LoginForm = ({setRoute}) => {
  const classes = useStyles();
  const goToRegistrForm = event => {
    event.preventDefault();
    setRoute("регистрация");
  }

  return (
    <AppConsumer>
       {AppContext => {

         const onSubmit = (e) => {
          AppContext.login(e.target.email.value, e.target.password.value);
         }

         return (
          <Card className={classes.card}>
            <form  onSubmit={onSubmit}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant='h4' component='h1'>
                    Войти
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <p>
                    Новый пользователь?{' '}
                    <Link href="#" onClick={goToRegistrForm}>
                    Зарегистрируйтесь
                    </Link>
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth required name="email" type="email" label="Имя пользователя"/>
                </Grid>
                <Grid item xs={12} >
                  <TextField fullWidth required name="password" type="password" label="Пароль" margin="normal"/>
                </Grid>
                <Grid item xs={12} align="right" className={classes.btnGrid}>
                  <Button type="submit" variant="contained" color="primary">
                    Войти
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Card>
         )
       }}
    </AppConsumer>
  );
}