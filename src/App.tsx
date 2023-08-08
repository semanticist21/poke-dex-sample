import React from "react";
import { FontSize } from "./data/enums";
import TextBox from "./components/Text";

const App = () => {
  return (
    <div>
      <TextBox content="hi" fontSize={FontSize.XL9} txtColor="text-red-500"/>
    </div>
  );
};

export default App;
