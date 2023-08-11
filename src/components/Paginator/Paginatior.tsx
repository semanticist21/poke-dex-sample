import BasicButton from "components/DefaultButton/DefaultButton";
import { useEffect, useState } from "react";

export interface PaginatorProps {
  itemTotalCnt: number;
  limit: number;
  currentPage: number;
  isLoading: boolean;
  setCurrentPage: (page: number) => void;
}

const Paginator: React.FC<PaginatorProps> = ({
  itemTotalCnt: total,
  limit,
  currentPage,
  isLoading,
  setCurrentPage,
}) => {
  const buttonCnt = 5;
  const initialButtonSet = Array.from(Array(buttonCnt).keys()).map(
    (x) => x + 1
  );
  const [maxPage, setMaxPage] = useState(Math.ceil(total / limit));
  const [buttonSet, setButtonSet] = useState(initialButtonSet);

  useEffect(() => {
    setMaxPage(Math.ceil(total / limit));
  }, [total, limit]);

  useEffect(() => {
    const start = buttonSet[0];
    const end = buttonSet[4];

    if (currentPage >= start && currentPage <= end) {
      return;
    }

    switch (true) {
      case currentPage === 1:
        setButtonSet([...initialButtonSet]);
        break;
      case currentPage === maxPage:
        setButtonSet([
          ...initialButtonSet.map((x) => x + (maxPage - (maxPage % buttonCnt))),
        ]);
        break;
      case currentPage < start:
        setButtonSet(buttonSet.map((x) => x - buttonCnt));
        break;
      case currentPage > end:
        setButtonSet(buttonSet.map((x) => x + buttonCnt));
        break;
    }
  }, [currentPage, buttonSet, initialButtonSet, maxPage]);

  const setPage = (val: number) => {
    if (val > maxPage) return;
    if (isLoading) return;
    setCurrentPage(val);
  };

  return (
    <div className="flex w-screen justify-center space-x-[0.125rem]">
      <BasicButton onClick={() => setPage(1)} disabled={currentPage <= 5}>
        ≤
      </BasicButton>
      <BasicButton
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </BasicButton>
      {buttonSet.map((x) =>
        currentPage === x ? (
          <BasicButton key={x} onClick={() => {}} isActive={true}>
            {x}
          </BasicButton>
        ) : x <= maxPage ? (
          <BasicButton key={x} onClick={() => setPage(x)}>
            {x}
          </BasicButton>
        ) : (
          <div key={x} className="absolute h-0 w-0 bg-transparent"></div>
        )
      )}
      <BasicButton
        onClick={() => setPage(currentPage + 1)}
        disabled={currentPage === maxPage}
      >
        &gt;
      </BasicButton>
      <BasicButton
        onClick={() => setPage(maxPage)}
        disabled={currentPage === maxPage}
      >
        ≥
      </BasicButton>
    </div>
  );
};

export default Paginator;
