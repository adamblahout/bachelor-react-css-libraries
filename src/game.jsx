import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

function Game({ hra }) {
  return (
    <div className="justify-content-center m-2">
      <Link
        to={`/details/${hra.id}`}
        className="text-decoration-none hover:"
        title={hra.title}
      >
        <h2>{hra.title}</h2>
        <Image src={hra.thumbnail} alt={hra.title} rounded />
      </Link>
    </div>
  );
}

export default Game;
