import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, Grid, Button } from '@material-ui/core';
import { getRegister, getRegisterIsLoading, fetchRegisterRequest } from '../../modules/register';
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
		marginTop: 15
	}
}));

const SignupForm = () => {
	const classes = useStyles();

	const register = useSelector(getRegister, shallowEqual);
	const loading = useSelector(getRegisterIsLoading, shallowEqual);
	const registerAction = useSelector(fetchRegisterRequest, shallowEqual);

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();

		let email = event.target.email.value;
		let password = event.target.password.value;
		let name = event.target.name.value;
		let surname = event.target.surname.value;

		if (email && password && name && surname) {
			dispatch({
				...registerAction,
				payload: {
					email: email,
					password: password,
					name: name,
					surname: surname,
				}
			});
		}
	}

	if (register && register.success && JSON.parse(register.success) === true) {
		console.log(register.success);
		localStorage.setItem('authSuccess', register.success);
		localStorage.setItem('authToken', register.token);
		history.push('/login');
	}

	return (
		<Card className={classes.card}>
			<form onSubmit={onSubmit}>
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
						<Field
							component={CustomField}
							label="Адрес электронной почты"
							type="email"
							name="email"
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} className={classes.gridTopMargin}>
						<Grid container spacing={2}>
							<Grid item xs={6}>
								<Field
									component={CustomField}
									label="Имя"
									type="name"
									name="name"
									fullWidth
								/>
							</Grid>
							<Grid item xs={6} >
								<Field
									component={CustomField}
									label="Фамилия"
									type="surname"
									name="surname"
									fullWidth
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} className={classes.gridTopMargin}>
						<Field
							component={CustomField}
							label="Пароль"
							type="password"
							name="password"
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} align="right" className={classes.btnGrid}>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							ata-testid="buttonLogin"
							disabled={loading ? true : false}>
							Зарегистрироваться
            </Button>
					</Grid>
				</Grid>
			</form>
		</Card>
	);
}

const signUpValidator = (values) => {
	const errors = {};

	if (!values.email) {
		errors.email = 'Введите адресс почты';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Адресс почты не правильный';
	}

	if (!values.name) {
		errors.name = 'Введите имя';
	}

	if (!values.surname) {
		errors.surname = 'Введите фамилию';
	}

	if (!values.password) {
		errors.password = 'Введите пароль';
	}

	return errors;
}

export default reduxForm({
	form: 'sign-up',
	validate: signUpValidator
})(SignupForm);