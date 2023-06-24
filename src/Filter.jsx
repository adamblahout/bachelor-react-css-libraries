import { useEffect, useState } from "react";
import { useFetchAllGames } from "./fetchAllGames";
import { useFetchGamesByGenre } from "./fetchGamesByGenre";
import { MenuItem, Select, TextField, InputLabel, Grid } from "@mui/material";
const GENRES = [
  "mmorpg",
  "shooter",
  "strategy",
  "moba",
  "racing",
  "sports",
  "social",
  "sandbox",
  "open-world",
  "survival",
  "pvp",
  "pve",
  "pixel",
  "voxel",
  "zombie",
  "turn-based",
  "first-person",
  "third-Person",
  "top-down",
  "tank",
  "space",
  "sailing",
  "side-scroller",
  "superhero",
  "permadeath",
  "card",
  "battle-royale",
  "mmo",
  "mmofps",
  "mmotps",
  "3d",
  "2d",
  "anime",
  "fantasy",
  "sci-fi",
  "fighting",
  "action-rpg",
  "action",
  "military",
  "martial-arts",
  "flight",
  "low-spec",
  "tower-defense",
  "horror",
  "mmorts",
];

function Filter(props) {
  const { setFilter, setAllGames } = props;
  const [genre, setGenre] = useState("");

  const { data: allGames, isLoading: isAllGamesLoading } = useFetchAllGames();
  const { data: gamesByGenre, isLoading: isGamesByGenreLoading } =
    useFetchGamesByGenre(genre);

  console.log(genre);

  console.log(isGamesByGenreLoading, "I am loading");
  useEffect(() => {
    if (genre) {
      setAllGames(gamesByGenre);
    } else {
      setAllGames(allGames);
    }
  }, [genre, allGames, gamesByGenre, setAllGames]);
  if (isAllGamesLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <Grid container style={{ marginLeft: "44%" }}>
      <Grid item xs={12} sm={6} justifyContent={"center"} alignItems={"center"}>
        <TextField
          id="Search Game"
          label="Search Game"
          variant="outlined"
          onChange={(e) => setFilter(e.target.value)}
        />
        <InputLabel id="genre">Žánr</InputLabel>
        <Select
          displayEmpty
          labelId="genre"
          id="genre"
          label="genre"
          value={genre}
          onChange={(e) => {
            setGenre(e.target.value);
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {GENRES.map((genre) => (
            <MenuItem value={genre} key={genre}>
              {genre}
            </MenuItem>
          ))}
        </Select>
      </Grid>
    </Grid>
  );
}
export default Filter;
