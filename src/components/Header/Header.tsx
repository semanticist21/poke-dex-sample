import { FontSize, FontWeight } from "../../data/enums";
import TextBox from "../Text/TextBox";

const Header: React.FC = ({}) => {
  const eWord = "é";
  const titleF = "Pok";
  const titleB = "dex";

  const color = "text-[#C4584F]"

  return (
    <div className="flex items-start w-screen overflow-hidden select-none">
      <TextBox
        content={titleF}
        fontWeight={FontWeight.BOLD}
        fontSize={FontSize.XL4}
        fontColor={color}
      />
      <div className="pt-[0.2rem]">
        <TextBox
          content={eWord}
          fontWeight={FontWeight.EXTRABOLD}
          fontSize={FontSize.XL4}
          fontColor={color}
        />
      </div>
      <TextBox
        content={titleB}
        fontWeight={FontWeight.BOLD}
        fontSize={FontSize.XL4}
        fontColor={color}
      />
    </div>
  );
};

export default Header;
