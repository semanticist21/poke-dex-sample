import Card from "../components/Card/Card";
import DescTextBox from "../components/Text/DescTextBox";
import Header from "../components/Text/Header";

const MainPage = () => {
  return (
    <div className="flex flex-col items-center h-screen w-screen bg-white">
      <div className="pl-5 pt-6 pr-9 w-full">
        <div className="flex flex-col items-start w-screen ">
          <Header />
          <div className="h-7 bg-transparent" />
          <DescTextBox />
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
