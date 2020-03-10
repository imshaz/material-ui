import React from 'react';
import {withStyles} from '@material-ui/core/styles'
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import BreakPoint from './components/BreakPoints'
import FillingSpace  from "./components/FillingSpace";
import FixedColumn  from "./components/FixedColumn";
import FixedPosition from "./components/AppBar/FixedPosition"
const style=theme=>(
{
  App:{
   textAlign: 'center'
},
paper:{
  padding: theme.spacing(2),
  textAlign:'center',
  color:theme.palette.text.secondary
// backgroundColor:'red',
},


}
)
function App({classes}) {
  return (
    <div className={classes.App}>

    <FixedPosition/>
      <h1>Material-UI</h1>
      <BreakPoint/>

      <br/>
      <FillingSpace/>

      <h1>Fixed width</h1>
      <FixedColumn/>


      {/* Break point equal to auto */}

      {/* <Grid container spacing={4}> 
      <Grid item xs="auto" sm="auto" md="auto">
        <Paper className={classes.paper}>xs=auto, sm=auto, md=auto</Paper>
      </Grid> 

      <Grid item xs="auto" sm="auto" md="auto">
        <Paper className={classes.paper}>xs=auto, sm=auto, md=auto</Paper>
      </Grid> 

      <Grid item xs="auto" sm="auto" md="auto">
        <Paper className={classes.paper}>xs=auto, sm=auto, md=auto</Paper>
      </Grid> 

      <Grid item xs="auto" sm="auto" md="auto">
        <Paper className={classes.paper}>xs=auto, sm=auto, md=auto</Paper>
      </Grid> 
      </Grid> */}

    </div>
  );
}

export default withStyles(style)(App);
