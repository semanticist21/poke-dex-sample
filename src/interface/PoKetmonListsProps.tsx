import { SetStateAction, Dispatch } from "react";
import { PoketmonInfoProps } from "./PoketmonInfoProps";

export interface PoketmonListProps {
  originalItems: Array<PoketmonInfoProps>;
  setOriginalItems: Dispatch<SetStateAction<Array<PoketmonInfoProps>>>;
  showItems: Array<PoketmonInfoProps>;
  setShowItems: Dispatch<SetStateAction<Array<PoketmonInfoProps>>>;
}
