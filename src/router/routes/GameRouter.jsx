import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import AppContext from "../../context/AppContext";

import MonthTransition from "../../components/game/transitionPhase/MonthTransition";
import RewardsPage from "../../components/game/rewardPhase/RewardsPage";
import ManipulationPage from "../../components/game/manipulationPhase/ManipulationPage";
import MarketTransition from "../../components/game/transitionPhase/MarketTransition";
import MarketPage from "../../components/game/marketPhase/MarketPage";

const GameRouter = () => {
  const { currGame } = useContext(AppContext);
  return (
    <Routes>
      {currGame && (
        <>
          <Route path="/" element={<MonthTransition />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/manipulation" element={<ManipulationPage />} />
          <Route path="/newMarket" element={<MarketTransition />} />
          <Route path="/market" element={<MarketPage />} />
        </>
      )}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default GameRouter;
