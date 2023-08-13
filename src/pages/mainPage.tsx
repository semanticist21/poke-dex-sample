import CardItemList from "components/CardItemList/CardItemList";
import PokeBallImg from "components/PokeballImg/PokeballImg";
import SearchBox from "components/SearchBox";
import useFetch from "hooks/useFetch";
import { PoketmonInfoProps } from "interface/PoketmonInfoProps";
import { PoketmonListProps } from "interface/PoKetmonListsProps";
import { GlobalContext } from "provider/globalProvider";
import { useContext, useEffect, useMemo } from "react";
import getImgPathDic from "utils/imgPathDic";
import DescTextBox from "../components/DescTextBox/DescTextBox";
import Header from "../components/Header/Header";

const MainPage = () => {
  const contextObj: PoketmonListProps = useContext(GlobalContext);
  const pathsDic = useMemo(getImgPathDic, []);

  const url = `${process.env.REACT_APP_BASE_API}/pokemon?limit=100000&offset=0`;
  const [data, isLoading, error] = useFetch(url);

  useEffect(() => {
    if (data) {
      let lists: Array<PoketmonInfoProps> = [];

      let idx = 0;
      pathsDic.forEach((v, k) => {
        let obj: PoketmonInfoProps = { uniqueId: k };
        obj.imgPath = v;
        obj.data = data.results[idx];
        lists.push(obj);

        idx++;
      });

      contextObj.setOriginalItems(lists);
      contextObj.setShowItems(lists);
    }
  }, [data]);

  return (
    <div className="flex flex-col items-center h-screen w-screen">
      <div className="pl-5 pt-6 pr-9 w-full">
        <div className="flex flex-col items-start w-screen ">
          <div className="flex flex-row items-center">
            <Header />
            <SearchBox />
          </div>
          <div className="h-7 bg-transparent" />
          <DescTextBox />
          <div className="h-1 bg-transparent" />
        </div>
        {data && !error && !isLoading && <CardItemList limit={10} />}
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
