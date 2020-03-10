import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from './Drawer'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  colorPrimary: {
    backgroundColor: "red"
  }
}));

export default function FixedPosition() {
  const classes = useStyles();
  const [show, setShow] = React.useState(false);
  const hideDrawer =()=>{
      setShow(false)
  }
  return (
    <div className={classes.root}>
      <AppBar classes={{ colorPrimary: classes.colorPrimary }} position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon  onClick={()=>{setShow(true)}}/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <ul>
        {new Array(100).fill(null).map((v, i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>

      <Drawer show={show} hideDrawer={hideDrawer}/>
    </div>
  );
}
