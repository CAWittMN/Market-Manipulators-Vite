import React, { useState, useContext, useEffect } from "react";
import AppContext from "../../../context/AppContext";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import GameApi from "../../../GameApi";
import TablePage from "./table/TablePage";

const MarketPage = () => {
  const { currGame, handleGetTableData } = useContext(AppContext);
  const [nav, setNav] = useState("table");
  const { cols, rows } = handleGetTableData();
  const [rowData, setRowDatat] = useState();
  const [colDefs, setColDefs] = useState();

  const makeRowData = () => {
    let rows = [];
  };

  return (
    <div>
      <TablePage rows={rows} cols={cols} />
    </div>
  );
};

export default MarketPage;
