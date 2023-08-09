import { FontSize, FontWeight } from "../../data/enums";
import TextBox from "./TextBox";

const DescTextBox: React.FC = ({}) => {
  const eWord = "é";
  const descF = "The Pok";
  const descM = "dex";
  const descB =
    " Contains detailed stats for every creature from the Pokémon games.";

  return (
    <div className="flex flex-1 flex-wrap items-start whitespace-pre overflow-clip">
      <TextBox
        content={descF}
        fontWeight={FontWeight.MEDIUM}
        fontColor="text-[#6C727F]"
      />
      <div className="pt-[0.04rem] overflow-hidden">
        <TextBox
          content={eWord}
          fontWeight={FontWeight.BOLD}
          fontColor="text-[#6C727F]"
        />
      </div>
      <div className="">
        <TextBox
          content={descM}
          fontWeight={FontWeight.MEDIUM}
          fontColor="text-[#6C727F]"
        />
      </div>
      <div className="">
        <TextBox
          content={descB}
          fontWeight={FontWeight.MEDIUM}
          fontColor="text-[#6C727F]"
        />
      </div>
    </div>
  );
};

export default DescTextBox;
