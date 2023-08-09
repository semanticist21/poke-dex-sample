import { FontSize, FontWeight } from "../../data/enums";
import TextBox from "./TextBox";

const Header: React.FC = ({}) => {
  const eWord = "é";
  const titleF = "Pok";
  const titleB = "dex";

  return (
    <div className="flex items-start w-screen">
      <TextBox
        content={titleF}
        fontWeight={FontWeight.BOLD}
        fontSize={FontSize.XL4}
        fontColor="text-[#C4584F]"
      />
      <div className="pt-[0.2rem]">
        <TextBox
          content={eWord}
          fontWeight={FontWeight.EXTRABOLD}
          fontSize={FontSize.XL4}
          fontColor="text-[#C4584F]"
        />
      </div>
      <TextBox
        content={titleB}
        fontWeight={FontWeight.BOLD}
        fontSize={FontSize.XL4}
        fontColor="text-[#C4584F]"
      />
    </div>
  );
};

export default Header;
