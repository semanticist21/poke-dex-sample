import { Color } from "../data/types";
import React, { useEffect, useMemo, useRef } from "react";
import CardImageContainer from "./CardImageConatiner";
import TextBox from "./TextBox";
import { FontSize, FontWeight } from "../data/enums";

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
    <div className="my-[1.35rem]">
    <div className="flex min-w-[35rem] w-full h-[8.2rem] ps-3 py-4 rounded-[0.75rem] shadow-[0rem_0rem_2rem_-0.8rem_rgba(0,0,0,1.0)] bg-white">
        {<CardImageContainer imgPath={imgPath} />}
        <div className="flex items-center content-center ps-7">
          <TextBox
            content={title}
            fontSize={FontSize.XL2}
            fontWeight={FontWeight.MEDIUM}
          />
        </div>
        <div className="ml-auto mt-auto pe-4 pb-1">
          <TextBox
            content={`${indexMemo}`}
            fontSize={FontSize.XL3}
            fontWeight={FontWeight.BOLD}
            fontColor="text-[#0000003c]"
          />
        </div>
    </div>
    </div>
  );
};

export default Card;
