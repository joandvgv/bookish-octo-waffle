const ENDPOINT = "https://rickandmortyapi.com/api/character";

export const getCharacters = async () => {
  try {
    const data = await fetch(ENDPOINT);
    if (!data.ok) return [];

    const parsedData = await data.json();
    return parsedData.results;
  } catch {
    return [];
  }
};
