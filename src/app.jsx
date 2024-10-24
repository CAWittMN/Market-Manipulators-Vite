import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import MarketManipulators from "./MarketManipulators";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <MarketManipulators />
    </HashRouter>
  </React.StrictMode>
);
