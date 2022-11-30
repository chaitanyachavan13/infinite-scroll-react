const BaseAPI = "https://rickandmortyapi.com/api";

export const getCharacterList = async (page) =>
  await fetch(`${BaseAPI}/character?page=` + page)
    .then((res) => res.json())
    .then((data) => data);
