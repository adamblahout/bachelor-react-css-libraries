import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Grid, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useFetchGameById } from "./fetchGameById";

function Details() {
  const { id } = useParams();
  const { data: game, isLoading } = useFetchGameById(id);
  if (isLoading) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
  }

  const images = game.screenshots;
  let systemRequirements = game.minimum_system_requirements;

  return (
    <Box component="div" className="game" sx={{ margin: "1em" }}>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <Typography variant="h3" align="center">
            {game.title}
          </Typography>
        </Grid>
        <Grid item>
          <Box
            component="img"
            alt="The house from the offer."
            src={game.thumbnail}
            sx={{ borderRadius: "5%" }}
          />
        </Grid>
      </Grid>
      <Typography variant="h5" align="center">
        Fotogalerie:
      </Typography>
      <Grid container alignItems="center" spacing={2}>
        {images.map((image) => (
          <Grid item xs={12} sm={6} md={4} key={image.id}>
            <Box
              component="img"
              alt="The house from the offer."
              src={image.image}
              sx={{ width: "100%", height: "auto", borderRadius: "5%" }}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2} padding={"4em"}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4">Další informace:</Typography>
          <Typography variant="h6" sx={{ display: "inline" }}>
            {" "}
            <strong>Odkaz na hru:</strong>
          </Typography>
          <a href={game.game_url}>{game.game_url}</a>

          <Typography variant="h6">
            <strong>Žánr:</strong> {game.genre}
          </Typography>
          <Typography variant="h6">
            <strong>Vývojář:</strong> {game.developer}
          </Typography>
          <Typography variant="h6">
            <strong>Vydavatel:</strong> {game.publisher}
          </Typography>
          <Typography variant="h6">
            <strong>Podporované OS:</strong> {game.platform}
          </Typography>
          <Typography variant="h6">
            <strong>Datum vydání:</strong> {game.release_date}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4">Minimální systémové požadavky:</Typography>
          <TableContainer component={Paper}>
            <Table aria-label="System Requirements">
              <TableHead>
                <TableRow></TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography variant="h6">Graphics:</Typography>
                  </TableCell>
                  <TableCell align="right">
                    {systemRequirements?.graphics ? (
                      <p>{systemRequirements?.graphics}</p>
                    ) : (
                      "neuvedeno"
                    )}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography variant="h6">Memory:</Typography>
                  </TableCell>
                  <TableCell align="right">
                    {systemRequirements?.memory ? (
                      <p>{systemRequirements?.memory}</p>
                    ) : (
                      "neuvedeno"
                    )}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography variant="h6">OS:</Typography>
                  </TableCell>
                  <TableCell align="right">
                    {systemRequirements?.os ? (
                      <p>{systemRequirements?.os}</p>
                    ) : (
                      "neuvedeno"
                    )}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography variant="h6">Processor:</Typography>
                  </TableCell>
                  <TableCell align="right">
                    {systemRequirements?.processor ? (
                      <p>{systemRequirements?.processor}</p>
                    ) : (
                      "neuvedeno"
                    )}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography variant="h6">Storage:</Typography>
                  </TableCell>
                  <TableCell align="right">
                    {systemRequirements?.storage ? (
                      <p>{systemRequirements?.storage}</p>
                    ) : (
                      "neuvedeno"
                    )}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      <Typography variant="h3">Description:</Typography>
      <Typography variant="p" sx={{ fontSize: "1.5em" }}>
        {game.description}
      </Typography>
      <Link to="/">
        <Button variant="contained" sx={{ float: "right", margin: "3em" }}>
          Zpět
        </Button>
      </Link>
    </Box>
  );
}

export default Details;
