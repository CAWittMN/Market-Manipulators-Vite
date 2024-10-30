import React from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalProvider,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const NextMonthModal = () => {
  const nav = useNavigate();
  return (
    <div>
      NextMonthModal
      <Button onClick={() => nav("/game/newMonth")}>Next Month</Button>
    </div>
  );
};

export default NextMonthModal;
