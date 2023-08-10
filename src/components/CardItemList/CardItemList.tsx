import { AxiosError, AxiosResponse } from "axios";
import Paginator from "components/Paginator/Paginatior";
import { TDataResp } from "data/types";
import { useEffect, useMemo, useState } from "react";
import getImgPathDic from "utils/imgPathDic";
import {
  genPokeUrl,
  genPokeUrlLimit,
  getAllResp,
  getResp,
} from "utils/pokeApiQuery";
import Card, { CardProps } from "../Card/Card";

export interface CardItemListProps {
  limit: number;
}

const CardItemList: React.FC<CardItemListProps> = ({ limit }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemProps, setItemProps] = useState<Array<CardProps>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalCnt, setTotalCnt] = useState(0);

  const dic: Map<number, string> = useMemo(() => getImgPathDic(), []);
  const wholeItem: Array<CardProps> = useMemo(() => {
    let itemPropsArr: Array<CardProps> = [];

    dic.forEach((v, k) =>
      itemPropsArr.push({
        imgPath: `/asset/imgs/${v}`,
        index: itemPropsArr.length + 1,
      })
    );

    return itemPropsArr;
  }, []);

  useEffect(() => {
    const doAllPokeNamesRequestAsync = async () => {
      const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
      const data: TDataResp = await getResp(url);

      let totalTemp = 0;
      if (!(data instanceof AxiosError)) {
        const infoObj: Array<any> = data.data.results;
        totalTemp = infoObj.length;
      }

      if(totalTemp > dic.size){
        totalTemp = dic.size;
      }

      setTotalCnt(totalTemp);
    };

    doAllPokeNamesRequestAsync();
  }, []);

  useEffect(() => {
    setIsLoading(true);

    const newOffset = (currentPage - 1) * limit;
    const showItemProps = wholeItem.slice(newOffset, newOffset + limit);

    const doNameRequestsAsync = async (itemProps: Array<CardProps>) => {
      const url = genPokeUrlLimit(limit, showItemProps[0].index);
      const data: TDataResp = await getResp(url);

      let names: Array<any> = [];

      if (!(data instanceof AxiosError)) {
        const infoObj: Array<any> = data.data.results;
        names = infoObj.map((info) => info.name);
      }

      const newPropsWithName: Array<CardProps> = itemProps.map((props, idx) =>
        Object.assign(props, { title: names[idx] ? names[idx] : null })
      );

      setItemProps(newPropsWithName);
      setIsLoading(false);
    };

    doNameRequestsAsync(showItemProps);
  }, [limit, currentPage]);

  return (
    <div className="flex flex-col h-screen w-100%">
      {itemProps.length ? (
        itemProps.map((props, idx) => (
          <Card
            key={idx}
            imgPath={props.imgPath}
            index={props.index}
            title={props.title}
          />
        ))
      ) : (
        <div></div>
      )}
      <Paginator
        isLoading={isLoading}
        itemTotalCnt={totalCnt}
        limit={10}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default CardItemList;
