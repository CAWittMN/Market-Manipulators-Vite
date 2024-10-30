import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import GameRouter from "./routes/GameRouter";

import MainMenu from "../components/menus/MainMenu.jsx";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainMenu />} />
      <Route path="/game/*" element={<GameRouter />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;
