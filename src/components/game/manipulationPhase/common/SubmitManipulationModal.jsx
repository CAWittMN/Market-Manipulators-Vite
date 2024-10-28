import { Button } from "@nextui-org/react";
import React from "react";

const SubmitManipulationModal = ({ onSubmit }) => {
  return (
    <div>
      SubmitManipulationModal
      <Button onClick={onSubmit}>submit</Button>
    </div>
  );
};

export default SubmitManipulationModal;
