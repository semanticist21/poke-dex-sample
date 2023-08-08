import strsToClass from "../converter/classConverter";
import logo from "../asset/imgs/0.png";
import { useEffect, useRef } from "react";

export interface CardImageContainerProps {
  imgPath?: string;
  bgColor?: string;
  alt?: string;
}

const CardImageContainer: React.FC<CardImageContainerProps> = ({
  bgColor = "bg-transparent",
  imgPath = "/asset/imgs/1.png",
  alt = "불러오는 중...",
}) => {
  const base = "scale-[130%]";

  return (
    <>
      <img
        className={strsToClass(base, bgColor)}
        src={`${process.env.PUBLIC_URL}${imgPath}`}
        alt={alt}
      />
    </>
  );
};

export default CardImageContainer;
