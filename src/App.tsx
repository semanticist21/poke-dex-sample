import React from "react";
import { FontSize } from "./data/enums";
import TextBox from "./components/TextBox";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="flex flex-col items-center h-screen w-screen bg-cyan-100">
      {/* <TextBox content="hi" fontSize={FontSize.XL9} txtColor="text-red-500"/> */}
      <Card title="test" desc="testaa" index={0} />
    </div>
  );
};

export default App;
