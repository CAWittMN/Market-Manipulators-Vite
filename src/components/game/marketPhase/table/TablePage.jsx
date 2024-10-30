import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";

const TablePage = ({ data }) => {
  const { priceCols, priceRows, modCols, modRows } = data;
  const defaultColDef = {
    flex: 1,
  };
  return (
    <>
      <div>Table</div>
      <div
        // id="market-table"
        className="ag-theme-quartz"
        style={{
          height: "262px",
        }}
      >
        <AgGridReact
          // id="market-table"
          rowData={priceRows}
          columnDefs={priceCols}
          defaultColDef={defaultColDef}
          showGrid={true}
        />
      </div>
      <div
        id="mod-table"
        className="ag-theme-quartz"
        style={{
          height: "600px",
        }}
      >
        <AgGridReact rowData={modRows} columnDefs={modCols} />
      </div>
    </>
  );
};

export default TablePage;
