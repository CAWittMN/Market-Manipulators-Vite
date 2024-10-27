import React, { useContext } from "react";

import AppContext from "../../context/AppContext";

import NewGameMenu from "./NewGameMenu";
import LoadGameMenu from "./LoadGameMenu";
import ContinueGameButton from "./ContinueGameButton";
import Header from "../common/Header";

const MainMenu = () => {
  const { currGame, handleQuit } = useContext(AppContext);

  return (
    <div>
      <Header />
      {currGame && <ContinueGameButton />}
      <NewGameMenu />
      <LoadGameMenu />
      <button onClick={handleQuit}>Quit</button>
    </div>
  );
};

export default MainMenu;
