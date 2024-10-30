import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "./context/AppContext";
import GameApi from "./GameApi";
import Menu from "./components/common/menuModal/Menu.jsx";
import Router from "./router/Router.jsx";
import { Divider } from "@nextui-org/react";

const MarketManipulators = () => {
  const [currGame, setCurrGame] = useState(null);
  const [phaseIdx, setPhaseIdx] = useState(0);
  const [theme, setTheme] = useState("standard");

  const nav = useNavigate();

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
    nav("/game");
  };

  const handleUnloadGame = () => {
    setCurrGame(null);
    nav("/");
  };

  const handleGetTableData = () => {
    return GameApi.makeTableData(currGame);
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
      }}
    >
      <div className="container-sm">
        <Menu />
        <Router />
      </div>
    </AppContext.Provider>
  );
};

export default MarketManipulators;
