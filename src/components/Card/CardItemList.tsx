import Paginator from "components/Page/Paginatior";
import { useEffect, useMemo, useState } from "react";
import getImgPathDic from "utils/imgPathDic";
import { genPokeUrl, getAllResp } from "utils/pokeApiQuery";
import Card, { CardProps } from "./Card";

export interface CardItemListProps {
  limit: number;
}

const CardItemList: React.FC<CardItemListProps> = ({ limit }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemProps, setItemProps] = useState<Array<CardProps>>([]);

  const dic: Map<number, string> = useMemo(() => getImgPathDic(), []);
  const wholeItem: Array<CardProps> = useMemo(() => {
    let itemPropsArr: Array<CardProps> = [];

    dic.forEach((v, k) =>
      itemPropsArr.push({
        imgPath: `/asset/imgs/${v}`,
        index: itemPropsArr.length,
      })
    );

    return itemPropsArr;
  }, []);

  useEffect(() => {
    const newOffset = (currentPage - 1) * limit;
    const showItemProps = wholeItem.slice(newOffset, newOffset + limit);

    const makeNmRequestsAsync = async (itemProps: Array<CardProps>) => {
      const urls = itemProps.map((props) =>
        genPokeUrl(
          parseInt(
            props.imgPath!.replace(".png", "").replace("/asset/imgs/", "")
          )
        )
      );

      const data = await getAllResp(urls);
      const names = data.map((resp) => (resp ? resp.data.name : "??"));
      const newPropsWithName: Array<CardProps> = itemProps.map((props, idx) =>
        Object.assign(props, { title: names[idx] })
      );

      setItemProps(newPropsWithName);
      setItemOffset(newOffset);
    };

    makeNmRequestsAsync(showItemProps);
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
        itemTotalCnt={dic.size}
        limit={10}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default CardItemList;
