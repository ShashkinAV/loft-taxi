import React from 'react';
import { useEffect, useState } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Button, Box, Typography, MenuItem, Select, FormControl, InputLabel } from '@material-ui/core';
import { getCard, fetchGetCardRequest } from '../../modules/card';
import { getRoute, fetchRouteRequest } from '../../modules/route';
import { getAddressList, fetchAddressListRequest } from '../../modules/address';
import history from '../../history';

const useStyles = makeStyles(theme => ({
	card: {
		padding: 40,
		width: 350,
		position: 'absolute',
		top: '8%',
		left: '5%'
	},
	btnBox: {
		// marginTop: 40
	},
	title: {
		fontSize: 16,
	},
	formControl: {
		minWidth: '100%',
		marginBottom: 40
	},
	typography: {
		marginBottom: 40
	}
}));

export const MapForm = () => {
	const classes = useStyles();

	const dispatch = useDispatch();

	const cardResult = useSelector(getCard, shallowEqual);
	const addressList = useSelector(getAddressList, shallowEqual);
	const routeResult = useSelector(getRoute, shallowEqual);
	const getCardAction = useSelector(fetchGetCardRequest, shallowEqual);
	const addressListAction = useSelector(fetchAddressListRequest, shallowEqual);
	const routeAction = useSelector(fetchRouteRequest, shallowEqual);

	let addresses = [];

	useEffect(() => {
		dispatch(getCardAction);
		dispatch(addressListAction);
	}, []);

	const [route, setRoute] = useState({
		from: '',
		to: '',
		isOrdered: false,
	});

	if (addressList && addressList.addresses && addressList.addresses.length) {
		addresses = addressList.addresses;
	}

	const onSubmit = e => {
		e.preventDefault();

		dispatch({
			...routeAction,
			payload: {
				address1: route.from,
				address2: route.to,
			}
		})

		setRoute({
			...route,
			isOrdered: true,
		});
	}

	const onChange = event => {
		let input = event.target;
		setRoute({ ...route, [input.name]: input.value });
	};

	const AddressSelect = props => {
		const { addressKey, otherAddress } = props;

		let availableAddresses = addresses
			.filter(item => item !== otherAddress)
			.map(addressItem => (
				<MenuItem key={addressItem} value={addressItem}>
					{addressItem}
				</MenuItem>
			));

		return (
			<Select
				value={route[addressKey]}
				onChange={onChange}
				inputProps={{ name: addressKey, id: addressKey }}
				data-testid={addressKey}
				autoWidth
			>
				{availableAddresses}
			</Select>
		);
	};

	return (
		<Card className={classes.card}>
			{cardResult && cardResult.cardNumber ?
				!route.isOrdered ?
					<form onSubmit={onSubmit}>
						<FormControl className={classes.formControl}>
							<InputLabel htmlFor="from">Откуда</InputLabel>
							<AddressSelect addressKey="from" otherAddress={route.to} />
						</FormControl>
						<FormControl className={classes.formControl}>
							<InputLabel htmlFor="to">Куда</InputLabel>
							<AddressSelect addressKey="to" otherAddress={route.from} />
						</FormControl>
						<Box className={classes.btnBox}>
							<Button
								type="submit"
								variant="contained"
								color="primary"
								fullWidth
								size="large"
							>
								Вызвать такси
              </Button>
						</Box>
					</form>
					:
					<>
						<Typography variant='h4' component='h1' className={classes.typography}>
							Заказ размещён
            </Typography>
						<Typography className={classes.title} color="textSecondary" className={classes.typography}>
							Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
            </Typography>
						<Box className={classes.btnBox}>
							<Button
								type="submit"
								variant="contained"
								color="primary"
								fullWidth
								size="large"
								onClick={() => {
									setRoute({
										...route,
										from: '',
										to: '',
										isOrdered: false,
									});
									dispatch({
										...routeAction,
										payload: {
											address1: '',
											address2: '',
										}
									})
								}}
							>
								Сделать новый заказ
              </Button>
						</Box>
					</>
				:
				<Typography className={classes.title}>
					Заполните платежные данные.
					Укажите информацию о банковской карте, чтобы сделать заказ.
          <Box className={classes.btnBox}>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							fullWidth
							size="large"
							onClick={() => history.push('/profile')}
						>
							Профиль
            </Button>
					</Box>
				</Typography>
			}
		</Card>
	);
}