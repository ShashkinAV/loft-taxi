import React from 'react';
import { Link } from 'react-router-dom';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, Typography, TextField, Button } from '@material-ui/core';
import { getAuth, fetchAuthRequest } from '../../modules/auth';
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

export const LoginForm = () => {
	const classes = useStyles();

	const auth = useSelector(getAuth, shallowEqual);
	const authAction = useSelector(fetchAuthRequest, shallowEqual);

	const dispatch = useDispatch();

	if (auth && auth.success && JSON.parse(auth.success) === true) {
		console.log(auth.success);
		localStorage.setItem('authSuccess', auth.success);
		localStorage.setItem('authToken', auth.token);
		history.push('/map');
	}

	const onSubmit = (e) => {
		e.preventDefault();

		dispatch({
			...authAction,
			payload: {
				email: e.target.email.value,
				password: e.target.password.value
			}
		});
	}

	return (
		<Card className={classes.card}>
			<form onSubmit={onSubmit}>
				<Grid container>
					<Grid item xs={12}>
						<Typography variant='h4' component='h1'>
							Войти
                  </Typography>
					</Grid>
					<Grid item xs={12}>
						<p>
							Новый пользователь?{' '}
							<Link to={'/signup'} >
								Зарегистрируйтесь
                    </Link>
						</p>
					</Grid>
					<Grid item xs={12}>
						<TextField fullWidth required name="email" type="email" label="Имя пользователя" />
					</Grid>
					<Grid item xs={12} >
						<TextField fullWidth required name="password" type="password" label="Пароль" margin="normal" />
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
}