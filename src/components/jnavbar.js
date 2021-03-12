import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import MovieIcon from "@material-ui/icons/Movie";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

export default function JNavbar() {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <MovieIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Movies layout
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
