import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";

const RewardsPage = () => {
  const nav = useNavigate();
  return (
    <div>
      RewardsPage
      <Button onClick={() => nav("/game/manipulation")} />
    </div>
  );
};

export default RewardsPage;
