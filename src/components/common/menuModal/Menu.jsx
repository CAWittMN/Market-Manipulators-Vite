import React from "react";
import { useGameContext } from "../../../hooks/hooks";
import {
  Avatar,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
} from "@nextui-org/react";
import QuitModal from "./QuitModal";
import CreditsModal from "./CreditsModal";
import LoadGameModal from "./LoadGameModal";
import RulesModal from "./RulesModal";
import BackToMainModal from "./BackToMainModal";

const Menu = () => {
  const { handleQuit, quitModalDisclosure, loadGameModalDisclosure } =
    useGameContext();
  const handleMenuAction = (key) => {
    if (key === "quit") quitModalDisclosure.onOpen();
    if (key === "back-to-main") backModalDisclosure.onOpen();
    if (key === "load-game") loadGameModalDisclosure.onOpen();
  };
  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Avatar
            className="text-black select-none"
            name="MM"
            size="md"
            color="secondary"
            isBordered
            radius="lg"
            classNames={{
              base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
            }}
          />
        </DropdownTrigger>
        <DropdownMenu onAction={handleMenuAction}>
          <DropdownSection showDivider>
            <DropdownItem textValue="kjhkh" key="back-to-main">
              <p className="text-white">Back to the main menu</p>
            </DropdownItem>
            <DropdownItem key="load-game">
              <LoadGameModal />
            </DropdownItem>
          </DropdownSection>
          <DropdownSection showDivider>
            <DropdownItem key="rules">
              <RulesModal />
            </DropdownItem>
            <DropdownItem key="credits">
              <CreditsModal />
            </DropdownItem>
          </DropdownSection>
          <DropdownSection>
            <DropdownItem key="quit">Quit</DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
      <QuitModal disclosure={quitModalDisclosure} quit={handleQuit} />
    </>
  );
};

export default Menu;
