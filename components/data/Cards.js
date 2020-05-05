import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CountUp from 'react-countup';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '50px 0',
  },

  card: {
    margin: ' 0 2% !important',
  },

  infected: {
    borderBottom: '10px solid rgba(0,0,255,0.5)',
  },

  recovered: {
    borderBottom: '10px solid rgba(0,255,0,0.5)',
  },

  deaths: {
    borderBottom: '10px solid rgba(255,0,0,0.5)',
  },
});

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container spacing={3} justify="center">
        <Grid container spacing={3} justify="center">
          <Grid
            item
            xs={12}
            md={3}
            component={Card}
            className={(classes.card, classes.infected)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.75}
                  seperator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2" component="P">
                Number of active cases of COVID-19
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            component={Card}
            className={(classes.card, classes.recovered)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recovered
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.75}
                  seperator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2" component="P">
                Number of recoveries from COVID-19
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            component={Card}
            className={(classes.card, classes.deaths)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.75}
                  seperator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2" component="P">
                Number of deaths caused by COVID-19
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Info;
