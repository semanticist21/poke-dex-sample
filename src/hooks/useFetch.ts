import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import axiosRetry from "axios-retry";

const useFetch = (
  url: string,
  id?: number,
  queryType: queryTypes = queryTypes.CARD
) => {
  const queryKey =
    Boolean(id) && !isNaN(id!)
      ? genIdQuerykey(queryType, id!)
      : genAllQueryKey();

  const { data, isLoading, error } = useQuery(
    queryKey,
    () => fetchByAxios(url),
    {}
  );

  if (error) {
    console.error("An error occured:", error);
    return [null, isLoading, error];
  }

  return [data, isLoading, null];
};

// API 자체 서비스
// 공통 컴포넌트 -> 네트워크/컴포넌트/데이터 액세스 <->Ui

const fetchByAxios = async (url: string) => {
  const client = axios.create();
  axiosRetry(client, { retries: 1 });

  const resp = await axios.get(url);
  return resp.data;
};

// query keys
// query types
// query gen functions
export enum queryTypes {
  ALL = "ALL",
  CARD = "CARD",
  SPECIES = "SPECIES",
}

export type TQueryKey = [queryTypes, number];
export const genAllQueryKey = () => [queryTypes.ALL, 1] as const;
export const genIdQuerykey = (type: queryTypes, id: number) =>
  [type, id] as const;

export default useFetch;
