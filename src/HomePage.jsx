import { useEffect, useState } from "react";
import Game from "./game";
import Filter from "./Filter";
import { Row } from "react-bootstrap";

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
    <Row className="justify-content-center">
      <Filter setFilter={setFilter} setAllGames={setAllGames} />
      <Row lg={3} md={2} sm={1}>
        {filteredGames.map((hra) => (
          <div key={hra.id} className="text-center">
            <Game key={hra.id} hra={hra} />
          </div>
        ))}
      </Row>
    </Row>
  );
};

export default HomePage;
