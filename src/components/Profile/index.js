import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {ProfileForm} from './ProfileForm'

const BackgroundURL = '../background.jpg';

const useStyles = makeStyles(theme => ({
  profile: {
    width: '100%',
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundImage: `url(${BackgroundURL})`,
    // display: 'flex',
    // justifyContent: 'center'
  }
}));

export const Profile = () => {
  const classes = useStyles();

  return (
    <Box className={classes.profile}>
      <Grid container direction="row" justify="center">
        <ProfileForm/>
      </Grid>
    </Box>
  );
}