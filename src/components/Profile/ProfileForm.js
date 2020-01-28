import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import DateFnsUtils from '@date-io/date-fns';
import { MCIcon } from 'loft-taxi-mui-theme';

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

export const ProfileForm = () => {
  const classes = useStyles();

  const [selectedDate, handleDateChange] = useState(new Date());

  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Card className={classes.card}>
      <form>
        <Grid>
          <Grid item xs={12} align='center' className={classes.gridHeader}>
            <Typography variant='h4' component='h1'>
              Профиль
            </Typography>
            <Typography className={classes.title} color="textSecondary">
              Способ оплаты
            </Typography>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={6} >
              <Paper elevation={3} className={classes.paper}>
                <MCIcon />
                <TextField 
                  fullWidth 
                  required
                  placeholder="0000 0000 0000 0000"
                  name="cardNumber" 
                  type="text" 
                  label="Номер карты:" 
                  margin="normal"/>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    placeholder="11/19"
                    openTo="year"
                    name="expiryDate"
                    format="dd/MM/yyyy"
                    label="Срок действия:"
                    views={["year", "month", "date"]}
                    value={selectedDate}
                    onChange={handleDateChange}
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
                  fullWidth 
                  required 
                  name="userName" 
                  type="text" 
                  label="Имя владельца:" 
                  placeholder="USER NAME"
                  margin="normal"/>
                  <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="cvs">
                      CVS:{' '}
                      <Tooltip title="3 последние цифры на оборотной стороне карты" arrow>
                        <HelpOutlineIcon fontSize='small'/>
                      </Tooltip>
                    </InputLabel>
                    <Input
                      id="cvs"
                      type={values.showPassword ? 'text' : 'password'}
                      value={values.password}
                      onChange={handleChange('password')}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12}  align="center" className={classes.btnGrid}>
            <Button type="submit" variant="contained" color="primary">
              Сохранить
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
}
