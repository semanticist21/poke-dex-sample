import axios from "axios";

const genPokeUrl = (id: number) => `https://pokeapi.co/api/v2/pokemon/${id}`;

const getByAxios = (url: string) => axios.get(url);

const requestPokeDataAsync = (dic: Map<number, string>) => {
  const urls = Object.keys(dic)
    .filter((x) => x)
    .map((v) => genPokeUrl(parseInt(v)!));

  return urls.map((url) => getByAxios(url));
};

export default requestPokeDataAsync;
