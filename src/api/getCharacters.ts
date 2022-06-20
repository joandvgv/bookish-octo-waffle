const ENDPOINT = "https://rickandmortyapix.com/api/character";

export const getCharacters = async () => {
  const data = await fetch(ENDPOINT);
  if (!data.ok) return [];

  const parsedData = await data.json();
  return parsedData.results;
};
