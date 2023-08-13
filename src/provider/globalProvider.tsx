import { PoketmonInfoProps } from "interface/PoketmonInfoProps";
import { PoketmonListProps } from "interface/PoKetmonListsProps";
import React, { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

const GetGlobalPropsHooks = (): PoketmonListProps => {
  const [originalItems, setOriginalItems] = useState<Array<PoketmonInfoProps>>(
    []
  );
  const [showItems, setshowItems] = useState<Array<PoketmonInfoProps>>([]);

  return {
    originalItems: originalItems,
    showItems: showItems,
    setOriginalItems: setOriginalItems,
    setShowItems: setshowItems,
  };
};

const GlobalContextProvider: React.FC<Props> = ({ children }) => {
  const GlobalProps = GetGlobalPropsHooks();

  return (
    <GlobalContext.Provider value={GlobalProps}>
      {children}
    </GlobalContext.Provider>
  );
};

export const GlobalContext = createContext<PoketmonListProps>({
  originalItems: [],
  setOriginalItems: (_) => {},
  showItems: [],
  setShowItems: (_) => {},
});

export default GlobalContextProvider;
