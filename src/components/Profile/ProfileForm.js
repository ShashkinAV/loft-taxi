import React from 'react';
import { useEffect, useState } from 'react';
import { MCIcon } from 'loft-taxi-mui-theme';
import { getCard, getPostCard, fetchGetCardRequest, fetchPostCardRequest, } from '../../modules/card';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, Paper, Button, Input, InputLabel, InputAdornment, IconButton, Tooltip, FormControl } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import DateFnsUtils from '@date-io/date-fns';
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
	const classes = useStyles();
	const dispatch = useDispatch();

	const [state, setState] = useState({
		cardNumber: '',
		expiryDate: new Date(),
		cardName: '',
		cvc: ''
	});

	useEffect(() => {
		if (card && card.cardNumber) {
			setState({
				cardNumber: card && card.cardNumber ? card.cardNumber : '',
				expiryDate: card && card.expiryDate ? card.expiryDate : new Date(),
				cardName: card && card.cardName ? card.cardName : '',
				cvc: card && card.cvc ? card.cvc : '',
			});
			console.log(state.expiryDate)
		}
	}, []);

	const postCard = useSelector(getPostCard, shallowEqual);
	const card = useSelector(getCard, shallowEqual);
	const postCardAction = useSelector(fetchPostCardRequest, shallowEqual);
	const getCardAction = useSelector(fetchGetCardRequest, shallowEqual);

	const onInputChange = event => {
		let input = event.target;
		setState({ ...state, [input.name]: input.value });
	};

	const onDateInputChange = date => {
		setState({ ...state, expiryDate: date });
	};

	const onSubmit = (e) => {
		e.preventDefault();

		successAlert = true;

		console.log(e.target.expiryDate.value);

		dispatch({
			...postCardAction,
			payload: {
				cardNumber: e.target.cardNumber.value,
				expiryDate: e.target.expiryDate.value,
				cardName: e.target.cardName.value,
				cvc: e.target.cvc.value,
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
					<form onSubmit={onSubmit}>
						<Grid container spacing={4}>
							<Grid item xs={6} >
								<Paper elevation={3} className={classes.paper}>
									<MCIcon />
									<TextField
										label="Номер карты:"
										placeholder="0000 0000 0000 0000"
										type="text"
										name="cardNumber"
										value={state.cardNumber}
										onChange={onInputChange}
										InputLabelProps={{ shrink: true }}
										margin="normal"
										fullWidth
										required
									/>
									<MuiPickersUtilsProvider utils={DateFnsUtils}>
										<DatePicker
											label="Срок действия:"
											placeholder="11/19"
											name="expiryDate"
											value={state.expiryDate}
											onChange={onDateInputChange}
											openTo="year"
											minDate={new Date()}
											// views={["year", "month", "date"]}
											format="dd/MM/yyyy"
											InputLabelProps={{ shrink: true }}
											margin="normal"
											fullWidth
											required
										/>
									</MuiPickersUtilsProvider>
								</Paper>
							</Grid>
							<Grid item xs={6} >
								<Paper elevation={3} className={classes.paper}>
									<TextField
										label="Имя владельца:"
										placeholder="USER NAME"
										type="text"
										name="cardName"
										value={state.cardName}
										onChange={onInputChange}
										InputLabelProps={{ shrink: true }}
										margin="normal"
										fullWidth
										required
									/>
									<TextField
										type="password"
										label="CVC:"
										type="text"
										placeholder="000"
										name="cvc"
										value={state.cvc}
										onChange={onInputChange}
										InputLabelProps={{ shrink: true }}
										fullWidth
										margin="normal"
										required
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