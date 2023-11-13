import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";

function Game({ hra }) {
  return (
    <div>
      <Link to={`/details/${hra.id}`}>
        <Typography variant="h4" align="center">
          {hra.title}

          <Grid></Grid>
          <Box
            component="img"
            alt="The house from the offer."
            src={hra.thumbnail}
            sx={{ borderRadius: "5%" }}
          />
        </Typography>
      </Link>
    </div>
  );
}

export default Game;
