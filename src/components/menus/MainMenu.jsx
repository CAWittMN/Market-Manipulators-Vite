import React, { useContext } from "react";

import AppContext from "../../context/AppContext";

import NewGameMenu from "./NewGameMenu";
import LoadGameMenu from "./LoadGameMenu";
import ContinueGameButton from "./ContinueGameButton";
import Header from "../common/Header";
import QuitModal from "../common/menuModal/QuitModal";

const MainMenu = () => {
  const { currGame } = useContext(AppContext);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="">
        <Header />
      </div>
      {currGame && <ContinueGameButton />}
      <NewGameMenu />
      <LoadGameMenu />
      <QuitModal />
    </div>
  );
};

export default MainMenu;
