import React, { useContext } from "react";
import AppContext from "../../../context/AppContext";

const TestCard = () => {
  const { setTestCount, testCount } = useContext(AppContext);
  return (
    <div>
      TestCard
      <button onClick={() => setTestCount(testCount + 1)}></button>
    </div>
  );
};

export default TestCard;
