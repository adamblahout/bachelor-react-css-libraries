import { useQuery } from "@tanstack/react-query";

const fetchGameById = async (id) => {
  const response = await fetch(`https://www.freetogame.com/api/game?id=${id}`);

  if (!response.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  return response.json();
};

export const useFetchGameById = (id) =>
  useQuery(["filteredGames", id], () => fetchGameById(id));