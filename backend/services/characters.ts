import axios from "axios";

export const getCharacters = async () => {
  const { data } = await axios.get("https://rickandmortyapi.com/api/character");
  return data.results;
};
