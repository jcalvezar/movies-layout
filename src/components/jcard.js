import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function JCard(props) {
  const classes = useStyles();

  const handleClick = () => {
    const win = window.open(props.movie.link.url, "_blank");
    win.focus();
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={props.movie.multimedia.src}
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {props.movie.display_title}
        </Typography>
        <Typography>{props.movie.summary_short}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClick}>
          Review
        </Button>
      </CardActions>
    </Card>
  );
}
