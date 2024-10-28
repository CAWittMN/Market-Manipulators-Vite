import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";

import AppContext from "../../../context/AppContext";

const MonthTransition = () => {
  const navigate = useNavigate();
  const { currGame } = useContext(AppContext);
  let prevMonth;
  let currMonth;

  return (
    <div>
      MonthTransition
      <Button onClick={() => navigate("/game/rewards")} />
    </div>
  );
};

export default MonthTransition;
