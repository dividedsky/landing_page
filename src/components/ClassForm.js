import React, { useState, useEffect } from 'react';
import { Grid, Typography, Card, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

const styles = theme => ({
  root: {
    height: 90,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  appBar: {
    height: theme.spacing.unit * 5,
    textAlign: 'center'
  },
  cardList: {},
  card: {
    width: 300,
    height: 200,
    margin: 20,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    padding: theme.spacing.unit * 3
  },
  date: {
    marginTop: 10
  }
});

const Landing = props => {
  const { classes } = props;
  let today = new Date(); // to set default for date inputs
  today = dateMapper(today);

  const [refreshrs, setRefreshrs] = useState([]);

  // fetch class refreshrs on mount
  useEffect(() => {
    getRefreshrs();
  }, []);

  const getRefreshrs = async () => {
    try {
      /* this should fetch the class's refreshrs, but the endpoint is not live yet so I'm doing this for testing */
      const res = await axios.get('https://refreshr.herokuapp.com/refreshrs');
      setRefreshrs(res.data.refreshrs.slice(0, 6));
    } catch (err) {
      console.log(err);
    }
  };

  // got to be a cleaner way to do this, but it works for now
  function dateMapper(date) {
    const month =
      date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  return (
    <>
      <Grid container className={classes.root}>
        <Typography variant="h5">Refreshrs</Typography>
        <Grid container className={classes.cardList}>
          {refreshrs.map(r => (
            <Card className={classes.card} key={r.id} raised>
              <Typography variant="h6">{r.name}</Typography>
              <TextField
                variant="outlined"
                className={classes.date}
                label="date"
                type="date"
                defaultValue={today}
              />
            </Card>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default withStyles(styles)(Landing);
