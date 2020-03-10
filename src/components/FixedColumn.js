import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const style = theme => ({
  container:{
      padding:"15px"
  },
  App: {
    textAlign: "center"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
    margin:theme.spacing(2)
  }
});

const Container = props => <Grid container {...props} />
const Item = props => <Grid item {...props} />

function FixedColumn({ classes }) {
  return (
    <Container className={classes.container} spacing={4}>
      <Container direction="column"  xs={3}>
        <Item><Paper className={classes.paper}><Typography>One</Typography></Paper></Item>
        <Item><Paper className={classes.paper}><Typography>Two</Typography></Paper></Item>

      </Container>{" "}
      <Container direction="column" xs={3}>
          <Paper className={classes.paper}><Typography>three</Typography></Paper>
          <Paper className={classes.paper}><Typography>Four</Typography></Paper>

       </Container>
      <Container direction="column" xs={3}>
          <Paper className={classes.paper}><Typography>five</Typography></Paper>
          <Paper className={classes.paper}><Typography>six</Typography></Paper>

       </Container>
      <Container direction="column" xs={3}>
          <Paper className={classes.paper}><Typography>seven</Typography></Paper>
          <Paper className={classes.paper}><Typography>Eight</Typography></Paper>

       </Container>
    </Container>
  );
}

export default withStyles(style)(FixedColumn);
