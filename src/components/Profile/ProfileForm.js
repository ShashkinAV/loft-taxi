	import React from 'react';
	import { useForm, Controller } from 'react-hook-form';
	import { shallowEqual, useSelector, useDispatch } from 'react-redux';
	import { MCIcon } from 'loft-taxi-mui-theme';
	import { makeStyles } from '@material-ui/core/styles';
	import { Card, Grid, Paper, Button } from '@material-ui/core';
	import Typography from '@material-ui/core/Typography';
	import TextField from '@material-ui/core/TextField';
	import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
	import DateFnsUtils from '@date-io/date-fns';
	import { getCard, getPostCard, fetchPostCardRequest, } from '../../modules/card';
	import history from '../../history';


	const useStyles = makeStyles(theme => ({
		card: {
			padding: 70,
			paddingTop: 60,
			width: 750,
			maxWidth: '50%',
			marginTop: 45,
		},
		title: {
			fontSize: 16,
		},
		gridHeader: {
			marginBottom: 40
		},
		paper: {
			position: 'relative',
			paddingTop: 16,
			paddingLeft: 32,
			paddingRight: 32,
			paddingBottom: 16
		},
		btnGrid: {
			marginTop: 45
		}
	}));

	let successAlert = false;

	export const ProfileForm = () => {
		const { handleSubmit, control, register, errors } = useForm();
		const classes = useStyles();
		const dispatch = useDispatch();

		const postCard = useSelector(getPostCard, shallowEqual);
		const card = useSelector(getCard, shallowEqual);
		const postCardAction = useSelector(fetchPostCardRequest, shallowEqual);

		const onSubmit = (data) => {
			console.log(data);

			successAlert = true;

			dispatch({
				...postCardAction,
				payload: {
					cardNumber: data.cardNumber,
					expiryDate: data.expiryDate,
					cardName: data.cardName,
					cvc: data.cvc,
					token: localStorage.getItem('authToken')
				}
			});
		}

		const goToMap = () => {
			history.push('/map');
			successAlert = false;
		}

		return (
			<Card className={classes.card}>
				<Grid>
					<Grid item xs={12} align='center' className={classes.gridHeader}>
						<Typography variant='h4' component='h1'>
							Профиль
				</Typography>
						<Typography className={classes.title} color="textSecondary">
							Способ оплаты
				</Typography>
					</Grid>
					{(successAlert && postCard && postCard.success && JSON.parse(postCard.success) === true) ?
						<Grid item xs={12} align='center'>
							<Typography className={classes.title}>
								Платёжные данные обновлены. Теперь вы можете заказывать такси.
				</Typography>
							<Grid className={classes.btnGrid} onClick={goToMap}>
								<Button variant="contained" color="primary">
									Go to card
					</Button>
							</Grid>
						</Grid> :
						<form onSubmit={handleSubmit(onSubmit)}>
							<Grid container spacing={4}>
								<Grid item xs={6} >
									<Paper elevation={3} className={classes.paper}>
										<MCIcon />
										<Controller
											margin="normal"
											as={TextField}
											onChange={([data]) => {
												const value = data.target.value;
												const onlyNum = value.replace(/[^\d\s]/g, '').trim();
												return (
													onlyNum && onlyNum.substring(0, 19).match(/\d{1,4}/g).join(' ')
												);
											}}
											helperText={
												errors.cardNumber && errors.cardNumber.message
											}
											label="Номер карты:"
											name="cardNumber"
											placeholder="0000 0000 0000 0000"
											control={control}
											defaultValue={
												card.cardNumber
													? card.cardNumber
													: ''
											}
											fullWidth
											inputRef={register({
												required: 'Введите номер карты',
												minLength: {
													value: 19,
													message: 'Неправильный номер карты'
												}
											})}
										/>
										<MuiPickersUtilsProvider utils={DateFnsUtils}>
											<Controller
												margin="normal"
												as={DatePicker}
												label="Срок действия:"
												placeholder="12/21"
												name="expiryDate"
												views={['year', 'month']}
												format="MM/yy"
												defaultValue={
													card.expiryDate
														? card.expiryDate
														: null
												}
												control={control}
												disablePast
												disableToolbar
												fullWidth
											/>
										</MuiPickersUtilsProvider>
									</Paper>
								</Grid>
								<Grid item xs={6} >
									<Paper elevation={3} className={classes.paper}>
										<Controller
											margin="normal"
											as={TextField}
											inputRef={register({
												required: 'Введите имя',
												minLength: {
													value: 6,
													message: 'Некоректное имя'
												}
											})}
											helperText={
												errors.cardName && errors.cardName.message
											}
											control={control}
											defaultValue={
												card.cardName ? card.cardName : ''
											}
											label="Имя владельца:"
											name="cardName"
											fullWidth
										/>
										<Controller
											margin="normal"
											as={TextField}
											inputRef={register({
												required: 'Введите 3 цифры',
												minLength: {
													value: 3,
													message: 'Некоректное CVC'
												}
											})}
											onChange={([data]) => {
												const value = data.target.value;

												return value.substr(0, 3);
											}}
											helperText={errors.cvc && errors.cvc.message}
											control={control}
											defaultValue={
												card.cvc ? card.cvc : ''
											}
											label="CVC"
											name="cvc"
											fullWidth
										/>
									</Paper>
								</Grid>
							</Grid>
							<Grid item xs={12} align="center" className={classes.btnGrid}>
								<Button type="submit" variant="contained" color="primary">
									Сохранить
					</Button>
							</Grid>
						</form>
					}
				</Grid>
			</Card>
		);
	}