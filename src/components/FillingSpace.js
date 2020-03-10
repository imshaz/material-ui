import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";

const style = theme => ({
  App: {
    textAlign: "center"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

const Container = props => <Grid container {...props} />;
const Item = props => <Grid item {...props} />;

function FillingSpace({ classes, justify }) {
  return (
    <Container spacing={4}>
      <Item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>
          <Container justify="space-around">
            <Item>
              <Chip label="xs=12" />
            </Item>{" "}
            <Item>
              <Chip label="sm=6" />
            </Item>{" "}
            <Item>
              <Chip label="md=3" />
            </Item>{" "}
          </Container>
        </Paper>
      </Item>
      <Item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>
          <Container justify="space-around">
            <Item>
              <Chip label="xs=12" />
            </Item>
            <Item>
              <Chip label="sm=6" />
            </Item>
            <Item>
              <Chip label="md=3" />
            </Item>
          </Container>
        </Paper>
      </Item>

      <Item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>
          <Container justify="space-around">
            <Item>
              <Chip label="xs=12" />
            </Item>
            <Item>
              <Chip label="sm=6" />
            </Item>
            <Item>
              <Chip label="md=3" />
            </Item>
          </Container>
        </Paper>
      </Item>

      <Item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>
          <Container justify="space-around">
            <Item>
              <Chip label="xs=12" />
            </Item>
            <Item>
              <Chip label="sm=6" />
            </Item>
            <Item>
              <Chip label="md=3" />
            </Item>
          </Container>
        </Paper>
      </Item>
    </Container>
  );
}

export default withStyles(style)(FillingSpace);
