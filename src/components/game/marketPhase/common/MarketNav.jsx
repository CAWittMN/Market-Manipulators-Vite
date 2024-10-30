import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarBrand,
  Link,
  Button,
} from "@nextui-org/react";
import StatsModal from "./StatsModal";

const MarketNav = ({ nav, setNav }) => {
  return (
    <Navbar>
      <NavbarBrand>
        <p>Market is open!</p>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem isActive={nav === "table"}>
          <Button
            variant={nav === "table" ? "solid" : "ghost"}
            size="sm"
            radius="sm"
            onClick={() => setNav("table")}
          >
            Table
          </Button>
        </NavbarItem>
        <NavbarItem isActive={nav === "charts"}>
          <Button
            variant={nav === "charts" ? "solid" : "ghost"}
            size="sm"
            radius="sm"
            onClick={() => setNav("charts")}
          >
            Charts
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default MarketNav;
