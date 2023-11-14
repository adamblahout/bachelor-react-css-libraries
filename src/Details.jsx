import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Row, Image } from "react-bootstrap";
import { Col } from "react-bootstrap";
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
    <div className="game m-5">
      <div className="text-center">
        <h1>{game.title}</h1>
        <Image
          src={game.thumbnail}
          alt="obrazek"
          className="mb-5 "
          sm={75}
          rounded
        />
      </div>
      <div className="m-auto">
        <Row lg={3} md={2} sm={1} className="px-5 w-65 mx-auto">
          {images.map((image) => (
            <Image src={image.image} key={image.id} rounded className="mt-3" />
          ))}
        </Row>
      </div>
      <div className="detail-games-everything  ">
        <div className="grid_for_two  justify-content-center">
          <Row lg={2} sm={1}>
            <Col>
              <div className="m-5 text-left">
                <h4 className="d-inline">Odkaz na stažení: </h4>
                <a href={game.game_url}>{game.game_url}</a>
                <h4 className="">Žánr: {game.genre}</h4>
                <h4>Vývojář: {game.developer}</h4>
                <h4>Vydavatel: {game.publisher}</h4>
                <h4>Podporované OS: {game.platform}</h4>
                <h4>Datum vydání: {game.release_date}</h4>
              </div>
            </Col>
            <Col>
              <div className="minimal_requirements m-5 float-end">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col"> Minimální systémové požadavky:</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Graphics:</th>
                      <td>
                        {systemRequirements?.graphics ? (
                          <p> {systemRequirements?.graphics} </p>
                        ) : (
                          "neuvedeno"
                        )}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Memory:</th>
                      <td>
                        {systemRequirements?.memory ? (
                          <p> {systemRequirements?.memory} </p>
                        ) : (
                          "neuvedeno"
                        )}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">OS:</th>
                      <td>
                        {" "}
                        {systemRequirements?.os ? (
                          <p> {systemRequirements?.os} </p>
                        ) : (
                          "neuvedeno"
                        )}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Processor:</th>
                      <td>
                        {" "}
                        {systemRequirements?.processor ? (
                          <p> {systemRequirements?.processor} </p>
                        ) : (
                          "neuvedeno"
                        )}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Storage:</th>
                      <td>
                        {" "}
                        {systemRequirements?.storage ? (
                          <p> {systemRequirements?.storage} </p>
                        ) : (
                          "neuvedeno"
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mx-5">
          <h2>Description:</h2>
          <p>{game.description}</p>
          <Link to="/">
            <Button variant="primary" className="float-end mb-5">
              Zpět
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Details;
