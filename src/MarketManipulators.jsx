import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "./context/AppContext";
import GameApi from "./GameApi";
import Menu from "./components/common/menuModal/Menu.jsx";
import NewGameMenu from "./components/menus/NewGameMenu.jsx";
import LoadGameMenu from "./components/menus/LoadGameMenu.jsx";
import Router from "./router/Router.jsx";

const MarketManipulators = () => {
  const [currGame, setCurrGame] = useState(null);
  const [manipulationData, setManipulationData] = useState(INITIAL);
  const [phaseIdx, setPhaseIdx] = useState(0);
  const [theme, setTheme] = useState("standard");

  const navigate = useNavigate();

  const handleStartNewGame = (options) => {
    const newGame = GameApi.newGame(options);
    setCurrGame(newGame);
    navigate("/game/market");
  };

  const handleGetGames = () => {
    const games = GameApi.getGames();
    return games;
  };

  const handleLoadGame = (fileName) => {
    const game = GameApi.getGame(fileName);
    setCurrGame(game);
    navigate("/game");
  };

  const handleUnloadGame = () => {
    setCurrGame(null);
  };

  const handleManipulate = (data) => {
    const prevMonth = currGame.months[currGame.months.length - 1];
    const manipulatedMonth = GameApi.manipulate(prevMonth, data);
    const updatedGame = currGame.months.push(manipulatedMonth);
    setCurrGame({ ...updatedGame });
    navigate("/game/newMonth");
    GameApi.saveGame(updatedGame);
  };

  const handleGetMarketCard = (cardNum) => {
    return marketCards[marketCardNum].component();
  };

  const handleQuit = () => GameApi.quitGame();

  return (
    <AppContext.Provider
      value={{
        currGame,
        handleManipulate,
        handleQuit,
        handleStartNewGame,
      }}
    >
      <Menu />
      <Router />
    </AppContext.Provider>
  );
};

export default MarketManipulators;
