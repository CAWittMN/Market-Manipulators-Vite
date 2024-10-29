import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";

const TablePage = ({ rows, cols }) => {
  return (
    <div>
      <AgGridReact rowData={rows} columnDefs={cols} />
    </div>
  );
};

export default TablePage;
