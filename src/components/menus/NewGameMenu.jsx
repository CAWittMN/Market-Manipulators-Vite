import React, { useState, useContext } from "react";
import AppContext from "../../context/AppContext";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";

const NewGameMenu = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [value, setValue] = useState({ numPlayers: 0, numMonths: 0 });
  const { handleStartNewGame } = useContext(AppContext);

  return (
    <>
      <Button onPress={onOpen}>New Game</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>New Game</ModalHeader>
              <ModalBody>
                <Input
                  type="number"
                  label="How Many Players?"
                  placeholder="4"
                  labelPlacement="outside"
                  value={value.numPlayers}
                  onValueChange={(v) => setValue({ ...value, numPlayers: v })}
                />
                <Input
                  type="number"
                  label="How Many Months?"
                  placeholder="6"
                  labelPlacement="outside"
                  value={value.numMonths}
                  onValueChange={(v) => setValue({ ...value, numMonths: v })}
                />
              </ModalBody>
              <ModalFooter>
                <Button onPress={() => handleStartNewGame(value)}></Button>
                <Button onPress={onClose}>Cancel</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewGameMenu;
