import React, { useMemo } from "react";
import CardImageContainer from "../CardImageContainer/CardImageConatiner";
import TextBox from "../Text/TextBox";
import { FontSize, FontWeight } from "data/enums";

export interface CardProps {
  imgPath?: string;
  title?: string;
  index: number;
}

const Card: React.FC<CardProps> = ({ imgPath, title = "", index }) => {
  const indexMemo = useMemo(() => {
    let value = index.toString();
    while (value.length < 3) {
      value = `0${value}`;
    }

    value = `#${value}`;

    return value;
  }, [index]);

  return (
    <div className="my-[1.35rem] select-none">
      <div className="flex min-w-[30rem] w-full h-[8.2rem] ps-3 py-4 rounded-[0.75rem] shadow-[0rem_0rem_2rem_-0.8rem_rgba(0,0,0,1.0)] hover:bg-gray-200 hover:bg-opacity-30 active:bg-gray-200 active:bg-opacity-90 bg-opacity-30 overflow-visible">
        {<CardImageContainer imgPath={imgPath} />}
        <div className="flex items-center content-center ps-7 opacity-70">
          <TextBox
            content={title}
            fontSize={FontSize.XL2}
            fontWeight={FontWeight.MEDIUM}
          />
        </div>
        <div className="ml-auto mt-auto pe-4 pb-1 select-none">
          <TextBox
            content={`${indexMemo}`}
            fontSize={FontSize.XL3}
            fontWeight={FontWeight.BOLD}
            fontColor="text-[#0000001c]"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
