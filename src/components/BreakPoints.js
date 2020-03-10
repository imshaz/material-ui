import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from "@material-ui/core/Grid"


const style= theme => ({
  App:{
   textAlign: 'center'
},
paper:{
  padding: theme.spacing(2),
  textAlign:'center',
  color:theme.palette.text.secondary
// backgroundColor:'red',
},

})
function BreakPoints({classes}) {
    return (
        <Grid container spacing={4}> 
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>xs=12, sm=6, md=3</Paper>
      </Grid> 

      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>xs=12, sm=6, md=3</Paper>
      </Grid> 

      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>xs=12, sm=6, md=3</Paper>
      </Grid> 

      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>xs=12, sm=6, md=3</Paper>
      </Grid> 
      </Grid>
    )
}

export default withStyles(style)(BreakPoints)
