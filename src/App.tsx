import React from "react";
import { FontSize } from "./data/enums";
import Text from "./components/text";

const App = () => {
  return (
    <div>
      <Text content="hi" fontSize={FontSize.XL9} txtColor="text-red-500"/>
    </div>
  );
};

export default App;
