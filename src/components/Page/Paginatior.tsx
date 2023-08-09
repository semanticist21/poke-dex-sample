import { isDisabled } from "@testing-library/user-event/dist/utils";
import BasicButton from "components/Button/DefaultButton";
import { useEffect, useState } from "react";

export interface PaginatorProps {
  itemTotalCnt: number;
  limit: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Paginator: React.FC<PaginatorProps> = ({
  itemTotalCnt: total,
  limit,
  currentPage,
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
  }, [limit]);

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
  }, [currentPage]);

  return (
    <div className="flex w-screen justify-center">
      <BasicButton
        onClick={() => setCurrentPage(1)}
        disabled={currentPage <= 5}
      >
        ≤
      </BasicButton>
      <BasicButton
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </BasicButton>
      {buttonSet.map((x) =>
        currentPage === x ? (
          <BasicButton key={x} onClick={() => {}} isActive={true}>
            {x}
          </BasicButton>
        ) : (
          <BasicButton
            key={x}
            onClick={() => {
              if (x > maxPage) return;
              setCurrentPage(x);
            }}
          >
            {x <= maxPage ? x : "-"}
          </BasicButton>
        )
      )}
      <BasicButton
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === maxPage}
      >
        &gt;
      </BasicButton>
      <BasicButton
        onClick={() => setCurrentPage(maxPage)}
        disabled={currentPage === maxPage}
      >
        ≥
      </BasicButton>
    </div>
  );
};

export default Paginator;
