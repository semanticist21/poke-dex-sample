import strsToClass from "../converter/classConverter";

export interface AvatarProps {
  containerClassName: string;
  sizeClass: string;
  imgPath: string;
  bgColor?: string;
  alt?: string;
}

const Avatar: React.FC<AvatarProps> = ({
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
