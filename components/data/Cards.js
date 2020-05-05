import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  makeStyles,
} from '@material-ui/core';
import CountUp from 'react-countup';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flex-direction: 'column',
    align-items: 'center',

  }
}));

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading....';
  }

  const classes = useStyles();

  return <div />;
};
