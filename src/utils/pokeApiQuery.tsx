import axios, { AxiosResponse } from "axios";
import axiosRetry from "axios-retry";

// axios function - modified
// configuration
// environment
// pokeapi.https://pokeapi.co/api/v2/ => env로 변경.
// fetch 함수를 훅으로 뺼 것
// hook -> 각 컴포넌트 마다 호출하고 파라미터 형식으로
// 로직 공통으로 빼놓을걸
// url을 컴포넌트에서 넣음.
// 에러 처리 액시오스 파일에서 공통처리
// 엑시오스에서 url 받으면 처리하고, 나머지는 알아서하는 방식으로 할 것.

// 세부상세 스피너넣을 것.
// Pokedex


export const genPokeNamesUrlLimit = (limit: number, offset: number) =>
  `${process.env.REACT_APP_BASE_API}/pokemon?limit=${limit}&offset=${offset}`;
export const genPokeDescsUrlLimit = (limit: number, offset: number) =>
  `${process.env.REACT_APP_BASE_API}/pokemon-species?limit=${limit}&offset=${offset}`;

export const genPokeUrl = (id: number) =>
  `${process.env.REACT_APP_BASE_API}/pokemon/${id}`;
export const genPokeDescUrl = (id: number) =>
  `${process.env.REACT_APP_BASE_API}/pokemon-species/${id}`;

// axios functions
export const getResp = async (url: string) => {
  axiosRetry(axios, { retries: 1 });

  const pipeline = await axios
    .get(url)
    .then((resp) => resp)
    .catch((err) => err);

  return pipeline;
};

export const getAllResp = async (urls: Array<string>) => {
  axiosRetry(axios, { retries: 1 });

  let resps: Array<AxiosResponse<any, any> | null> = [];

  const pipeline = urls
    .map((url) => axios.get(url))
    .map(async (request) => {
      try {
        const resp = await request;
        resps.push(resp);
      } catch (err) {
        console.log(err);
        resps.push(null);
      }
    });

  await Promise.all(pipeline);
  return resps;
};

// fetch functions
// const fetchNameData = () => {};
// const fetchCharacterData = () => {};

// usequery functions
// const genUseQuery = (key: QueryKey, callback: QueryFunction) => {
//   const options = {
//     retry: 2,
//     refetchOnMount: false,
//   };
//   return useQuery(key, callback, options);
// };

// const genUseQueries = (baseKey: string, callbacks: Array<QueryFunction>) => {
//   const idxs = callbacks.map((_, i) => [baseKey, i]);
//   const queryObjs = callbacks.map((c, i) => genUseQuery(idxs[i], c));

//   return queryObjs;
// };

// export default genUseQueries;
