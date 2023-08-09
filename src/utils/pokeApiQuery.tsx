import axios, { AxiosResponse } from "axios";
import getImgPathDic from "./imgPathDic";
import { QueryFunction, QueryKey, useQuery } from "@tanstack/react-query";
import { error } from "console";
import axiosRetry from "axios-retry";

// axios functions
export const genPokeUrl = (id: number) =>
  `https://pokeapi.co/api/v2/pokemon/${id}`;
export const requestByAxios = (url: string) => {
  axios.get(url);
};
export const getAllResp = async (urls: Array<string>) => {
  axiosRetry(axios, { retries: 1 });

  let resps: Array<AxiosResponse<any, any> | null> = [];

  const pipeline = urls
    .map((url) => axios.get(url))
    .map((request) => {
      return request
        .then((resp) => {
          resps.push(resp);
        })
        .catch((err) => {
          console.log(err);
          resps.push(null);
        });
    });

  await Promise.all(pipeline);
  return resps; 
};

// fetch functions
const fetchNameData = () => {};
const fetchCharacterData = () => {};

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
