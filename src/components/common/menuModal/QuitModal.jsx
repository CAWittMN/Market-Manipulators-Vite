import React, { useContext } from "react";
import AppContext from "../../../context/AppContext";
import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
} from "@nextui-org/react";

const QuitModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { handleQuit } = useContext(AppContext);
  return (
    <>
      <Button onPress={onOpen}>Quit</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-white">
                Are you sure you want to quit?
              </ModalHeader>
              <ModalFooter>
                <Button onPress={handleQuit}>Yes</Button>
                <Button onPress={onClose}>No</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default QuitModal;
