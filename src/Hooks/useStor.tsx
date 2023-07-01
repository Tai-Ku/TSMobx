import { useContext } from "react";
import { RootStore } from "../Store/RootStore ";
import { rootStoreContext } from "../Store";

export const useStore = () => {
  useContext(rootStoreContext);
};
