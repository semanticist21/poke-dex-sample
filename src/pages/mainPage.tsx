import Card from "../components/Card";
import TextBox from "../components/TextBox";
import { FontSize, FontWeight } from "../data/enums";

const MainPage = () => {
  const eWord = "é";
  const titleF = "Pok";
  const titleB = "dex";
  const descF = "The Pok";
  const descB =
    "dex Contains detailed stats for evey creature from the Pokémon games.";

  return (
    <div className="flex flex-col items-center h-screen w-screen bg-white">
      <div className="pl-5 pt-6 pr-9 w-full">
        <div className="flex flex-col items-start w-screen ">
          <div className="flex">
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

          <div className="h-7 bg-transparent" />
          <div className="flex">
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
          <div className="h-1 bg-transparent" />
        </div>
        <Card index={1} />
        <Card index={2} />
        <Card index={3} />
        <Card index={4} />
        <Card index={5} />
      </div>
    </div>
  );
};

export default MainPage;
