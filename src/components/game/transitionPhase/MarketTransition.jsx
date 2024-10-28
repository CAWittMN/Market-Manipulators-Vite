import { Button } from "@nextui-org/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const MarketTransition = () => {
  const nav = useNavigate();
  return (
    <div>
      MarketTransition
      <Button onClick={() => nav("/game/market")} />
    </div>
  );
};

export default MarketTransition;
