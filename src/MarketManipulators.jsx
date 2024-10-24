import React, { useState } from "react";
import AppContext from "./context/AppContext";
import GameApi from "./GameApi";
import marketCards from "./components/game/marketCards/marketCardsIndex.js";

import Router from "./router/Router.jsx";
import MainMenuPage from "./components/mainMenu/MainMenuPage.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
const MarketManipulators = () => {
  const [currGame, setCurrGame] = useState(null);
  const [deltaMods, setDeltaMods] = useState({});
  const [betaMods, setBetaMods] = useState({});
  const [marketCardNum, setMarketCardNum] = useState(null);
  const [manipulationCards, setManipulationCards] = useState([]);
  const [roll, setRoll] = useState(0);
  const [testCount, setTestCount] = useState(0);
  const [theme, setTheme] = useState("standard");

  const handleStartNewGame = (data) => {};
  const handleGetMarketCard = (cardNum) => {
    marketCards[marketCardNum].component();
  };

  const handleQuit = () => GameApi.quitGame();

  return (
    <AppContext.Provider
      value={{
        currGame,
        setCurrGame,
        deltaMods,
        setDeltaMods,
        betaMods,
        setBetaMods,
        testCount,
        setTestCount,
      }}
    >
      <Navbar />
      <div>MarketManipulators ${testCount}</div>
      <div></div>
      <Router />
      <button onClick={handleQuit}>Quit</button>
    </AppContext.Provider>
  );
};

export default MarketManipulators;
