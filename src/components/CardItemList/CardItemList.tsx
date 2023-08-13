import { useQuery } from "@tanstack/react-query";
import Card from "components/Card/Card";
import Paginator from "components/Paginator/Paginatior";
import { GlobalContext } from "provider/globalProvider";
import { useContext, useEffect, useState } from "react";

export interface CardItemListProps {
  limit: number;
}

const CardItemList: React.FC<CardItemListProps> = ({ limit }) => {
  const contextObj = useContext(GlobalContext);
  const [currentPage, setCurrentPage] = useState(1);
  const newOffset = (currentPage - 1) * limit;

  return (
    <div className="flex flex-col h-screen w-100%">
      {contextObj.showItems.length ? (
        contextObj.showItems
          .slice(newOffset, newOffset + limit)
          .map((props, idx) => (
            <Card
              key={idx}
              imgPath={props.imgPath}
              title={props.data?.name}
              uniqueId={props.uniqueId}
            />
          ))
      ) : (
        <div></div>
      )}
      <Paginator
        isLoading={false}
        itemTotalCnt={contextObj.showItems.length}
        limit={10}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default CardItemList;
