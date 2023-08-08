import strsToClass from "../converter/classConverter";
import { FontSize, FontWeight } from "../data/enums";
import { Color } from "../data/types";

export interface TextProps {
  content: string;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  txtColor?: Color;
  bgColor?: Color;
}

const Text: React.FC<TextProps> = ({
  content,
  fontSize = FontSize.BASE,
  fontWeight = FontWeight.NORMAL,
  txtColor = "text-black-500",
  bgColor = "bg-transparent",
}) => {
  const base = "text-center items-center";
  const input = [fontSize, fontWeight, txtColor, bgColor];

  return (
    <span className={strsToClass(base, ...input)}>{content}</span>
  );
};

export default Text;
