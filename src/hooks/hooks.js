import { useContext } from "react";
import AppContext from "../context/AppContext";

const useGameContext = () => useContext(AppContext);

export { useGameContext };
