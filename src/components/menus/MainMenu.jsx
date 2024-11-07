import React from "react";

import { useGameContext } from "../../hooks/hooks";

import { Button } from "@nextui-org/react";

import NewGameMenu from "./NewGameMenu";
import LoadGameMenu from "./LoadGameMenu";
import ContinueGameButton from "./ContinueGameButton";
import Header from "../common/Header";
import QuitModal from "../common/menuModal/QuitModal";

const MainMenu = () => {
  const { currGame, handleQuit, quitModalDisclosure } = useGameContext();

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="">
        <Header />
      </div>
      {currGame && <ContinueGameButton />}
      <NewGameMenu />
      <LoadGameMenu />
      <Button onPress={() => quitModalDisclosure.onOpen()}>Quit</Button>
      <QuitModal disclosure={quitModalDisclosure} quit={handleQuit} />
    </div>
  );
};

export default MainMenu;
