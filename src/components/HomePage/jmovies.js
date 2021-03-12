import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import JCard from "../jcard";
//import movies from "./movies";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default function JMovies() {
  const classes = useStyles();
  const [movies, setMovies] = useState({});

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        "https://jcalvez.info/apps/movies/movies.php"
      );

      const moviesList = await response.json();
      setMovies(moviesList);
      console.log("leyendo...", moviesList);
    };

    fetchMovies();
  }, []);

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {movies.results &&
          movies.results.map((movie, idx) => (
            <Grid item key={idx} xs={12} sm={6} md={4}>
              <JCard movie={movie} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
