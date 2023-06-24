import { Link } from "react-router-dom";
function Game({ hra }) {
  return (
    <div>
      <Link to={`/details/${hra.id}`}>
        <h2>{hra.title}</h2>
        <img src={hra.thumbnail} alt={hra.title} />
      </Link>
    </div>
  );
}

export default Game;
