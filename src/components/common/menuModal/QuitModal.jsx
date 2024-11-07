import React from "react";
import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

const QuitModal = ({ disclosure, quit }) => {
  const { isOpen, onOpen, onOpenChange, onClose } = disclosure;
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-white">
                Are you sure you want to quit?
              </ModalHeader>
              <ModalFooter>
                <Button onPress={quit}>Yes</Button>
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
