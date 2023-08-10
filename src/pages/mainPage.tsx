import CardItemList from "components/CardItemList/CardItemList";
import PokeBallImg from "components/PokeballImg/PokeballImg";
import Card from "../components/Card/Card";
import DescTextBox from "../components/DescTextBox/DescTextBox";
import Header from "../components/Header/Header";

const MainPage = () => {
  return (
    <div className="flex flex-col items-center h-screen w-screen">
      <div className="pl-5 pt-6 pr-9 w-full">
        <div className="flex flex-col items-start w-screen ">
          <Header />
          <div className="h-7 bg-transparent" />
          <DescTextBox />
          <div className="h-1 bg-transparent" />
        </div>
        <CardItemList limit={10} />
      </div>
      <div className="flex justify-end absolute z-[-1] w-full h-full bottom-32 left-32">
        <div className="absolute w-96 h-auto">
          <PokeBallImg />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
