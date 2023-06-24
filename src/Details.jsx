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
      <h1 className="font-bold text-2xl text-center">{game.title}</h1>
      <img
        src={game.thumbnail}
        alt="obrazek"
        className="mx-auto m-12 w-96 rounded-lg"
      />
      <h2 className="text-lg font-bold text-center mb-4">Foto Galerie:</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 ml-5 mr-5">
        {images.map((image) => (
          <img
            src={image.image}
            key={image.id}
            className="m-auto rounded-lg gap-1 sm:w-1/2 lg:w-auto md:w-auto"
          />
        ))}
      </div>
      <div className="detail-games-everything m-12">
        <div className="grid_for_two grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div>
            <h3 className="inline font-bold">Odkaz na stažení: </h3>
            <a href={game.game_url} className="text-blue-500 hover:text-black">
              {game.game_url}
            </a>
            <h3 className=" pb-5 pt-5">
              <strong>Žánr: </strong>
              {game.genre}
            </h3>
            <h3 className=" pb-5">
              <strong>Vývojář: </strong>
              {game.developer}
            </h3>
            <h3 className=" pb-5">
              <strong>Vydavatel:</strong> {game.publisher}
            </h3>
            <h3 className=" pb-5">
              <strong>Podporované OS:</strong> {game.platform}
            </h3>
            <h3 className=" pb-5">
              <strong>Datum vydání:</strong> {game.release_date}
            </h3>
          </div>
          <div>
            <div className="minimal_requirements text-center">
              <h3 className=" pb-5 font-bold text-lg">
                Minimální systémové požadavky:
              </h3>
              <table className="mx-auto">
                <div className="graphics">
                  <tr>
                    <th className="p-2">
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
                </div>
                <div className="memory">
                  <tr>
                    <th className="p-2">
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
                </div>
                <div className="operating_system">
                  <tr>
                    <th className="p-2">
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
                </div>
                <div className="Processor">
                  <tr>
                    <th className="p-2">
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
                </div>
                <div className="storage">
                  <tr>
                    <th className="p-2">
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
                </div>
              </table>
            </div>
          </div>
        </div>
        <h2 className="font-bold text-lg pt-6 pb-2">Description:</h2>
        <p>{game.description}</p>
        <Link to="/">
          <button className=" rounded-lg p-4 bg-blue-400 hover:opacity-80 float-right mb-6">
            Zpět
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Details;
