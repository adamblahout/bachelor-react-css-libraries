import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  hoverEffect: {
    "&:hover": {
      opacity: 0.8,
    },
  },
});

function Game({ hra }) {
  const classes = useStyles();
  return (
    <div className={classes.hoverEffect}>
      <Link to={`/details/${hra.id}`}>
        <Typography variant="h4" align="center">
          {hra.title}

          <Grid></Grid>
          <img src={hra.thumbnail} alt={hra.title} />
        </Typography>
      </Link>
    </div>
  );
}

export default Game;
