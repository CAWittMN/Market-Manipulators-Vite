import React, { useState, useContext, useEffect } from "react";
import AppContext from "../../../context/AppContext";
import TablePage from "./table/TablePage";
import NextMonthModal from "./common/NextMonthModal";
import MarketNav from "./common/MarketNav";
import ChartsPage from "./charts/ChartsPage";

const MarketPage = () => {
  const { currGame, handleGetTableData } = useContext(AppContext);
  const [nav, setNav] = useState("table");
  const tableData = handleGetTableData();
  console.log(tableData);

  return (
    <div>
      <MarketNav nav={nav} setNav={setNav} />
      {nav === "table" ? (
        <TablePage data={tableData} />
      ) : (
        <ChartsPage companies={currGame.companies} />
      )}
      {}
      <NextMonthModal />
    </div>
  );
};

export default MarketPage;
