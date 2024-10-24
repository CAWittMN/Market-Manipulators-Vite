import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import MainMenuRouter from "./routes/MainMenuRouter";
import GameRouter from "./routes/GameRouter";
import AppContext from "../context/AppContext";

const Router = () => {
  const { currGame } = useContext(AppContext);

  return (
    <Routes>
      <Route
        path="/"
        element={currGame ? <GameRouter /> : <MainMenuRouter />}
      />
    </Routes>
  );
};

export default Router;
