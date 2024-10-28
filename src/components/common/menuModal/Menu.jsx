import React from "react";
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
        <DropdownMenu>
          <DropdownSection showDivider>
            <DropdownItem textValue="kjhkh" key="back-to-main">
              <BackToMainModal />
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
            <DropdownItem key="quit">
              <QuitModal />
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default Menu;
