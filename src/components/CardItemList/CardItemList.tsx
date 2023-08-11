import { AxiosError } from "axios";
import Paginator from "components/Paginator/Paginatior";
import { TDataResp } from "data/types";
import { useEffect, useMemo, useState } from "react";
import getImgPathDic from "utils/imgPathDic";
import { getResp } from "utils/pokeApiQuery";
import Card, { CardProps } from "../Card/Card";

export interface CardItemListProps {
  limit: number;
}

const CardItemList: React.FC<CardItemListProps> = ({ limit }) => {

  console.log(process.env.REACT_APP_BASE_API)
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [wholeNames, setWholeNames] = useState<string[]>([]);
  const [totalCnt, setTotalCnt] = useState(0);
  const [itemProps, setItemProps] = useState<Array<CardProps>>([]);

  const dic: Map<number, string> = useMemo(() => getImgPathDic(), []);

  const wholeItem: Array<CardProps> = useMemo(() => {
    let itemPropsArr: Array<CardProps> = [];

    dic.forEach((v, k) =>
      itemPropsArr.push({
        imgPath: `/asset/imgs/${v}`,
        index: itemPropsArr.length + 1,
        uniqueId: Number(v.replace(".png", "")),
      })
    );
    return itemPropsArr;
  }, [dic]);

  useEffect(() => {
    const doAllPokeNamesRequestAsync = async () => {
      const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
      const data: TDataResp = await getResp(url);

      let totalTemp = 0;
      let names = [];

      if (!(data instanceof AxiosError)) {
        const infoObj: Array<any> = data.data.results;
        totalTemp = infoObj.length;
        names = infoObj.map((info) => info.name);
      }

      if (totalTemp > dic.size) {
        totalTemp = dic.size;
        names.splice(0, totalTemp - dic.size);
      }

      setTotalCnt(totalTemp);
      setWholeNames(names);
    };

    doAllPokeNamesRequestAsync();
  }, [dic.size]);

  useEffect(() => {
    setIsLoading(true);

    const newOffset = (currentPage - 1) * limit;
    const showItemProps = wholeItem.slice(newOffset, newOffset + limit);
    const names = wholeNames.slice(newOffset, newOffset + limit);

    const newPropsWithName = showItemProps.map((props, idx) =>
      Object.assign(props, { title: names[idx] ? names[idx] : null })
    );

    setItemProps(newPropsWithName);
    setIsLoading(false);
  }, [wholeNames, limit, currentPage, wholeItem]);

  return (
    <div className="flex flex-col h-screen w-100%">
      {itemProps.length ? (
        itemProps.map((props, idx) => <Card key={idx} {...props} />)
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
