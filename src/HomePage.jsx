import { useEffect, useState } from "react";
import Game from "./game";
import Filter from "./Filter";
import { Grid } from "@mui/material";

const HomePage = () => {
  const [hry, setAllGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (hry) {
      const vyfiltrovane = hry?.filter((hra) =>
        hra.title.toLowerCase().includes(filter.toLowerCase())
      );

      setFilteredGames(vyfiltrovane);
    }
  }, [filter, hry]);
  return (
    <div>
      <Grid container alignItems="center" justify="center">
        <Filter setFilter={setFilter} setAllGames={setAllGames} />
      </Grid>
      <Grid
        container
        spacing={3}
        alignItems="center"
        justify="center"
        style={{
          minHeight: "100vh",
          hover: "background-color:black",
        }}
      >
        {filteredGames.map((hra) => (
          <Grid item xs={12} sm={6} md={4} key={hra.id}>
            <Game hra={hra} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;
