import axios, { AxiosResponse } from "axios";
import getImgPathDic from "./imgPathDic";
import { QueryFunction, QueryKey, useQuery } from "@tanstack/react-query";
import { error } from "console";

// axios functions
const genPokeUrl = (id: number) => `https://pokeapi.co/api/v2/pokemon/${id}`;
const requestByAxios = (url: string) => axios.get(url);

// fetch functions
const fetchNameData = () => {};
const fetchCharacterData = () => {};

// usequery functions
const genUseQuery = (key: QueryKey, callback: QueryFunction) => {
  const options = {
    retry: 2,
    refetchOnMount: false,
  };
  return useQuery(key, callback, options);
};

const genUseQueries = (
  baseKey: QueryKey,
  callbacks: Array<QueryFunction>,
  dic: Map<number, string>
) => {
  if (dic.size !== callbacks.length) {
    throw error("dictionary and callbacks sizes are not matched.");
  }

  const idxs = Array.from(dic.keys()).map((k) => [baseKey, k]);
  const queryObjs = callbacks.map((c, i) => genUseQuery(idxs[i], c));

  return queryObjs;
};

export default genUseQueries;
