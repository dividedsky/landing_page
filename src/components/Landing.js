import React, { useState, useEffect } from "react";
import { Button, Grid, Typography, Card, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";

const styles = theme => ({
  root: {
    height: 90,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  appBar: {
    height: theme.spacing.unit * 5,
    textAlign: "center"
  },
  cardList: {},
  card: {
    width: 300,
    height: 200,
    margin: 20,
    overflow: "hidden",
    textOverflow: "ellipsis",
    padding: theme.spacing.unit * 3
  }
});

const Landing = props => {
  const [name, setName] = useState("justin");
  const [header, setHeader] = useState("");
  const { classes } = props;
  let today = new Date();
  today = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  console.log(today);
  console.log(today.toISOString().substr(0, 10));

  const handleChange = e => {
    e.preventDefault();
    setName(e.target.value);
  };

  const [refreshrs, setRefreshrs] = useState([]);
  useEffect(() => {
    getRefreshrs();
    console.log("refreshrs:", refreshrs);
  }, []);

  const getRefreshrs = async () => {
    try {
      const res = await axios.get("https://refreshr.herokuapp.com/refreshrs");
      console.log(res.data);
      setRefreshrs(res.data.refreshrs.slice(0, 10));
      refreshrs.forEach(r => dateMapper(r));
    } catch (err) {
      console.log(err);
    }
  };

  const dateMapper = refreshr => {
    refreshr.date = new Date(refreshr.date);
    console.log(typeof refreshr.date);
    return { ...refreshr, date: Date(refreshr.date) };
  };

  const handleSubmit = e => {
    e.preventDefault();
    setHeader(name);
  };
  return (
    <>
      <Grid container className={classes.root}>
        <Typography variant="h1">{header}</Typography>
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={handleChange} />
          <Button variant="contained" color="inherit" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </Grid>
      <Grid container>
        {refreshrs.map(r => (
          <Card className={classes.card} key={r.id} raised>
            <Typography variant="h6">{r.name}</Typography>
            <TextField type="date" defaultValue={today} />
          </Card>
        ))}
      </Grid>
    </>
  );
};

export default withStyles(styles)(Landing);
