import strsToClass from "utils/classConverter";
import { useEffect, useRef } from "react";

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
  additionalClass = "",
}) => {
  const base = "scale-[130%]";
  const ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    ref.current.alt = imgPath === "/asset/imgs/0.png" ? alt : "";
  }, [imgPath, alt]);

  return (
    <>
      <img
        className={strsToClass(base, bgColor, additionalClass)}
        ref={ref}
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
