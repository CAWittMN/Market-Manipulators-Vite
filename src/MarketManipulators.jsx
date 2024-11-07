import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@nextui-org/react";
import AppContext from "./context/AppContext";
import GameApi from "./GameApi";
import Menu from "./components/common/menuModal/Menu.jsx";
import Router from "./router/Router.jsx";
import { rule } from "postcss";

const MarketManipulators = () => {
  const [currGame, setCurrGame] = useState(null);
  const [theme, setTheme] = useState("standard");

  const nav = useNavigate();

  const quitModalDisclosure = useDisclosure();
  const loadGameModalDisclosure = useDisclosure();
  const nextMonthModalDiscolsure = useDisclosure();
  const rulesModalDisclosure = useDisclosure();
  const creditsModalDisclosure = useDisclosure();

  const handleStartNewGame = (options) => {
    const newGame = GameApi.newGame(options);
    setCurrGame(newGame);
    nav("/game/market/");
  };

  const handleGetGames = () => {
    const games = GameApi.getGames();
    return games;
  };

  const handleLoadGame = (fileName) => {
    const game = GameApi.getGame(fileName);
    setCurrGame(game);
    nav("/game/newMarket");
  };

  const handleUnloadGame = () => {
    setCurrGame(null);
    nav("/");
  };

  const handleGetTableData = () => {
    return GameApi.makeTableData(currGame);
  };

  const handleGetChartData = () => {
    return GameApi.makeChartData(currGame);
  };

  const handleManipulate = (data) => {
    const manipulatedGame = GameApi.manipulate(data, currGame);
    setCurrGame(manipulatedGame);
    nav("/game/newMarket");
    // GameApi.saveGame(updatedGame);
  };

  const handleQuit = () => GameApi.quitGame();

  return (
    <AppContext.Provider
      value={{
        currGame,
        handleManipulate,
        handleQuit,
        handleStartNewGame,
        handleGetTableData,
        handleGetChartData,
        quitModalDisclosure,
        loadGameModalDisclosure,
        rulesModalDisclosure,
        creditsModalDisclosure,
      }}
    >
      <div className="container w-[1200px] h-[90vh] mx-auto flex justify-center items-center relative border">
        <div className="absolute left-3 top-0">
          <Menu />
        </div>
        <Router />
      </div>
    </AppContext.Provider>
  );
};

export default MarketManipulators;
