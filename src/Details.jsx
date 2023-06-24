import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchGameById from "./fetchGameById";
import { Link } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchGameById);
  if (results.isLoading) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
  }
  const game = results.data;
  console.log(game);
  console.log(game.screenshots.image);

  const images = game.screenshots;

  let systemRequirements = game.minimum_system_requirements;

  console.log(game.minimum_system_requirements);
  return (
    <div className="game">
      <h1>{game.title}</h1>
      <img src={game.thumbnail} alt="obrazek" />
      <h2>Foto Galerie:</h2>
      <div>
        {images.map((image) => (
          <img src={image.image} key={image.id} />
        ))}
      </div>
      <div>
        <div>
          <div>
            <h3>Odkaz na stažení: </h3>
            <a href={game.game_url}>{game.game_url}</a>
            <h3>
              <strong>Žánr: </strong>
              {game.genre}
            </h3>
            <h3>
              <strong>Vývojář: </strong>
              {game.developer}
            </h3>
            <h3>
              <strong>Vydavatel:</strong> {game.publisher}
            </h3>
            <h3>
              <strong>Podporované OS:</strong> {game.platform}
            </h3>
            <h3>
              <strong>Datum vydání:</strong> {game.release_date}
            </h3>
          </div>
          <div className="minimal_requirements">
            <h3>Minimální systémové požadavky:</h3>
            <table>
              <tbody>
                <tr>
                  <th>
                    <strong>Graphics:</strong>
                  </th>
                  <td>
                    {systemRequirements?.graphics ? (
                      <> {systemRequirements?.graphics} </>
                    ) : (
                      "neuvedeno"
                    )}
                  </td>
                </tr>

                <tr>
                  <th>
                    <strong>Memory:</strong>
                  </th>
                  <td>
                    {systemRequirements?.memory ? (
                      <> {systemRequirements?.memory} </>
                    ) : (
                      "neuvedeno"
                    )}
                  </td>
                </tr>
                <tr>
                  <th>
                    <strong>OS:</strong>
                  </th>
                  <td>
                    {systemRequirements?.os ? (
                      <> {systemRequirements?.os} </>
                    ) : (
                      "neuvedeno"
                    )}
                  </td>
                </tr>
                <tr>
                  <th>
                    <strong>Processor:</strong>
                  </th>
                  <td>
                    {systemRequirements?.processor ? (
                      <> {systemRequirements?.processor} </>
                    ) : (
                      "neuvedeno"
                    )}
                  </td>
                </tr>
                <tr>
                  <th>
                    <strong>Storage:</strong>
                  </th>
                  <td>
                    {systemRequirements?.storage ? (
                      <> {systemRequirements?.storage} </>
                    ) : (
                      "neuvedeno"
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <h2>Description:</h2>
      <p>{game.description}</p>
      <Link to="/">
        <button>Zpět</button>
      </Link>
    </div>
  );
}

export default Details;
