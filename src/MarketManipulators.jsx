import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "./context/AppContext";
import GameApi from "./GameApi";
import marketCards from "./components/game/marketCards/marketCardsIndex.js";

import Router from "./router/Router.jsx";
import MainMenuPage from "./components/mainMenu/MainMenuPage.jsx";
import Navbar from "./components/navbar/Navbar.jsx";

const INITIAL = {
  deltaMods: {},
  betaMods: {},
  marketCardNum: null,
  manipulationCards: [],
  roll: 0,
  monthlyBonus: null,
};

const MarketManipulators = () => {
  const [currGame, setCurrGame] = useState(null);
  const [manipulationData, setManipulationData] = useState(INITIAL);
  const [gameList, setGameList] = useState([]);
  const [theme, setTheme] = useState("standard");

  const handleStartNewGame = (options) => {
    const newGame = GameApi.newGame(options);
    setCurrGame(newGame);
    return newGame;
  };

  const handleGetGames = () => {
    const games = GameApi.getGames();
    setGameList(games);
  };

  const handleLoadGame = (fileName) => {
    const game = GameApi.getGame(fileName);
  };

  const handleManipulate = () => {
    const prevMonth = currGame.months[currGame.months.length - 1];
    const manipulatedMonth = GameApi.manipulate(prevMonth, manipulationData);
    const updatedGame = currGame.months.push(manipulatedMonth);
    setCurrGame({ ...updatedGame });
    setManipulationData(INITIAL);
    GameApi.saveGame(updatedGame);
  };

  const handleUpdateManipulationData = (key, value) => {
    setManipulationData((manipulationData) => ({
      ...manipulationData,
      [key]: value,
    }));
  };

  const handleGetMarketCard = (cardNum) => {
    marketCards[marketCardNum].component();
  };

  const handleQuit = () => GameApi.quitGame();

  return (
    <AppContext.Provider
      value={{
        currGame,
        setCurrGame,
        manipulationData,
        setManipulationData,
      }}
    >
      <Navbar />
      <div>MarketManipulators</div>
      <Router />
      <button className="btn" onClick={handleQuit}>
        Quit
      </button>
    </AppContext.Provider>
  );
};

export default MarketManipulators;
