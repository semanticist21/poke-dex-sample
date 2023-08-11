import strsToClass from "../../utils/classConverter";
import { FontSize, FontWeight } from "../../data/enums";
import { TColor } from "../../data/types";

export interface TextBoxProps {
  content: string;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  fontColor?: TColor;
  bgColor?: TColor;
}

const TextBox: React.FC<TextBoxProps> = ({
  content,
  fontSize = FontSize.BASE,
  fontWeight = FontWeight.NORMAL,
  fontColor = "text-black-500",
  bgColor = "bg-transparent",
}) => {
  const base = "text-center items-center";
  const input = [fontSize, fontWeight, fontColor, bgColor];

  return <span className={strsToClass(base, ...input)}>{content}</span>;
};

export default TextBox;
