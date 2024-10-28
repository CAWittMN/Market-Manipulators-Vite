import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import MarketManipulators from "./MarketManipulators";
import { NextUIProvider } from "@nextui-org/react";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <HashRouter>
        <MarketManipulators />
      </HashRouter>
    </NextUIProvider>
  </React.StrictMode>
);
