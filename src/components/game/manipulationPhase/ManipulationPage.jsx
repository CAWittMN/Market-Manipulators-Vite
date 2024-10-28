import React, { useContext, useState } from "react";
import AppContext from "../../../context/AppContext";

import { Input, Button } from "@nextui-org/react";

import Roll from "./stages/Roll";
import SubmitManipulationModal from "./common/SubmitManipulationModal";

const INITIAL = {
  deltaMods: {},
  betaMods: {},
  marketCardNum: null,
  manipulationCards: [],
  roll: 0,
  monthlyBonus: null,
  rollVoid: false,
  betaAffectsDeltaMods: false,
  specialRoll: null,
};

const ManipulationPage = () => {
  const [data, setData] = useState(INITIAL);
  const { currGame, handleManipulate } = useContext(AppContext);
  const submitManipulation = () => handleManipulate(data);
  return (
    <div>
      ManipulationPage
      <Roll data={data} setData={setData} />
      <SubmitManipulationModal onSubmit={submitManipulation} />
    </div>
  );
};

export default ManipulationPage;
