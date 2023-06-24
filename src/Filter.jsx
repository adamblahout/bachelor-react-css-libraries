import { useEffect, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function requestFilteredGames() {
      if (genre) {
        setIsLoading(true);
        const response = await fetch(
          `https://www.freetogame.com/api/games?category=${genre}`
        );

        const data = await response.json();
        setAllGames(data);
        setIsLoading(false);
      } else {
        setIsLoading(true);
        const response = await fetch("https://www.freetogame.com/api/games");
        const data = await response.json();
        setAllGames(data); // = hry
        setIsLoading(false);
      }
    }
    requestFilteredGames();
  }, [genre, setAllGames]);

  if (isLoading) {
    <h1>Loading genres ...</h1>;
  }

  return (
    <div className="search-params">
      <label htmlFor="game">Game</label>
      <input
        type="text"
        placeholder="název hry"
        onChange={(e) => setFilter(e.target.value)}
      />
      <label htmlFor="genre" id="genre" name="genre">
        Genre
      </label>
      <select
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
      </select>
    </div>
  );
}

export default Filter;
