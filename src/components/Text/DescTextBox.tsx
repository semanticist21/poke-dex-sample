import { FontSize, FontWeight } from "../../data/enums";
import TextBox from "./TextBox";

const DescTextBox: React.FC = ({}) => {
  const eWord = "é";
  const descF = "The Pok";
  const descB =
    "dex Contains detailed stats for evey creature from the Pokémon games.";

  return (
    <div className="flex items-start w-screen">
      <TextBox
        content={descF}
        fontWeight={FontWeight.MEDIUM}
        fontColor="text-[#6C727F]"
      />
      <div className="pt-[0.04rem]">
        <TextBox
          content={eWord}
          fontWeight={FontWeight.BOLD}
          fontColor="text-[#6C727F]"
        />
      </div>
      <TextBox
        content={descB}
        fontWeight={FontWeight.MEDIUM}
        fontColor="text-[#6C727F]"
      />
    </div>
  );
};

export default DescTextBox;
