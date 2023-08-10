import strsToClass from "utils/classConverter";

export interface PokeBallImgProps {}

const PokeBallImg = () => {
  const imgPath = "/asset/imgs/pokeball.png";
  const opacity = "opacity-20";

  return (
    <div className={strsToClass(opacity)}>
      <img src={`${process.env.PUBLIC_URL}${imgPath}`} />
    </div>
  );
};

export default PokeBallImg;
