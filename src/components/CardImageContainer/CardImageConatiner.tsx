import strsToClass from "utils/classConverter";
import { useEffect } from "react";

export interface CardImageContainerProps {
  imgPath?: string;
  bgColor?: string;
  alt?: string;
  additionalClass?: string;
}

const CardImageContainer: React.FC<CardImageContainerProps> = ({
  bgColor = "bg-transparent",
  imgPath = "/asset/imgs/0.png",
  alt = "불러오는 중..",
  additionalClass = ""
}) => {
  const base = "scale-[130%]";
  useEffect(() => {
    alt = imgPath === "/asset/imgs/0.png" ? alt : "";
  }, [imgPath]);

  return (
    <>
      <img
        className={strsToClass(base, bgColor, additionalClass)}
        src={`${process.env.PUBLIC_URL}${imgPath}`}
        alt={alt}
        onError={(e) =>
          (e.currentTarget.src = `${process.env.PUBLIC_URL}/asset/imgs/0.png`)
        }
      />
    </>
  );
};

export default CardImageContainer;
