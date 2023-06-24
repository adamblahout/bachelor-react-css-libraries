import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const [game, setGame] = useState();

  useEffect(() => {
    const fetchGamebyId = async () => {
      const response = await fetch(
        `https://www.freetogame.com/api/game?id=${id}`
      );
      const data = await response.json();
      console.log(data);
      setGame(data);
    };
    fetchGamebyId();
  }, [id]);

  return (
    <div>
      <h1>{game?.title}</h1>
      <img src={game?.thumbnail} alt="picture" />
      <h2>Status: {game?.status}</h2>
      <h2>{id}</h2>
      <h3>Description: {game?.description}</h3>
      <Link to="/">
        <button>Back To Home Page</button>
      </Link>
    </div>
  );
}

export default Details;
