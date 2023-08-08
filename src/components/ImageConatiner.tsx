import strsToClass from "../converter/classConverter";

export interface ImageContainerProps {
  containerClassName: string;
  sizeClass: string;
  imgPath: string;
  bgColor?: string;
  alt?: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({
  sizeClass,
  imgPath,
  bgColor = "bg-transparent",
  alt = "",
}) => {
  return (
    <div>
      <img className={strsToClass(sizeClass, bgColor)} src={imgPath} alt={alt} />
    </div>
  );
};
