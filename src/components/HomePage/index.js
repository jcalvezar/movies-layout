import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import JFooter from "../jfooter";
import JNavbar from "../jnavbar";
import JHero from "./jhero";
import JMovies from "./jmovies";

const useStyles = makeStyles((theme) => ({
  main: {
    //backgroundColor: theme.palette.background.paper,
  },
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <JNavbar />
      <main className={classes.main}>
        <JHero />
        <JMovies />
      </main>
      <JFooter />
    </>
  );
}
