import React, { useState, useContext } from "react";
import AppContext from "../../../context/AppContext";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import GameApi from "../../../GameApi";

const makeColData = (months) => {
  let colums = [{ field: "company" }];
  for (const month of months) {
    colums.push({ field: month.month });
  }
  return columns;
};

const MarketPage = () => {
  const { currGame } = useContext(AppContext);
  const [nav, setNav] = useState("table");
  const [rowData, setRowDatat] = useState();

  const makeRowData = () => {
    let rows = [];
  };

  return <div>MarketPage</div>;
};

export default MarketPage;
