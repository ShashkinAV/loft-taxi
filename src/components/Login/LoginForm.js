import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, Typography, Button } from '@material-ui/core';
import { getAuth, getAuthIsLoading, fetchAuthRequest } from '../../modules/auth';
import history from '../../history';
import CustomField from '../CustomField/CustomField';

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
	},
	gridTopMargin: {
		marginTop: 20
	}
}));

const LoginForm = () => {
	const classes = useStyles();

	const auth = useSelector(getAuth, shallowEqual);
	const loading = useSelector(getAuthIsLoading, shallowEqual);
	const authAction = useSelector(fetchAuthRequest, shallowEqual);

	const dispatch = useDispatch();

	if (auth && auth.success && JSON.parse(auth.success) === true) {
		localStorage.setItem('authSuccess', auth.success);
		localStorage.setItem('authToken', auth.token);
		history.push('/map');
	}

	const onSubmit = (e) => {
		e.preventDefault();

		let email = e.target.email.value;
		let password = e.target.password.value;

		if (email && password) {
			dispatch({
				...authAction,
				payload: {
					email: email,
					password: password
				}
			});
		}
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
						<Field
							name="email"
							component={CustomField}
							label="Имя пользователя"
							type="email"
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} className={classes.gridTopMargin}>
						<Field
							name="password"
							component={CustomField}
							label="Пароль"
							type="password"
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} align="right" className={classes.btnGrid}>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							disabled={loading ? true : false}>
							Войти
            </Button>
					</Grid>
				</Grid>
			</form>
		</Card>
	)
}

const loginValidator = (values) => {
	const errors = {};

	if (!values.email) {
		errors.email = 'Please enter your email';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'It should be e-mail';
	}

	if (!values.password) {
		errors.password = 'Enter your password';
	}

	return errors;
}

export default reduxForm({
	form: 'sign-in',
	validate: loginValidator
})(LoginForm);