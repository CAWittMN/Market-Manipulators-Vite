import React from "react";
import { Input } from "@nextui-org/react";

const Roll = ({ data, setData }) => {
  const handleChange = (e) => {
    const num = Number(e.target.value);
    setData({ ...data, roll: num });
  };
  return (
    <div>
      Roll
      <Input onChange={handleChange}></Input>
    </div>
  );
};

export default Roll;
