import { useEffect, useState } from "react";
import { useFetchAllGames } from "./fetchAllGames";
import { useFetchGamesByGenre } from "./fetchGamesByGenre";
import Form from "react-bootstrap/Form";

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
  const { data: gamesByGenre} =
    useFetchGamesByGenre(genre);


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
    <div className="justify-content-center d-flex align-items-center">
      <div className="search-params w-25 text-center">
        <label htmlFor="game">Game</label>
        <Form.Control
          type="text"
          placeholder="název hry"
          onChange={(e) => setFilter(e.target.value)}
        />
        <label htmlFor="genre" id="genre" name="genre">
          Genre
        </label>
        <Form.Select
          className=" mb-5"
          aria-label="Default"
          name="genre"
          id="genre"
          value={genre}
          onChange={(e) => {
            setGenre(e.target.value);
          }}
        >
          <option value="">All</option>
          {GENRES.map((genre) => (
            <option key={genre}>{genre}</option>
          ))}
        </Form.Select>
      </div>
    </div>
  );
}

export default Filter;
