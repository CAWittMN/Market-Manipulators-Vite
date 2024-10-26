import React, { useContext } from "react";

import AppContext from "../../../context/AppContext";

const MonthTransition = () => {
  const { currGame } = useContext(AppContext);
  let prevMonth;
  let currMonth;

  return <div>MonthTransition</div>;
};

export default MonthTransition;
