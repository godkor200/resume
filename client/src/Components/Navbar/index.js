import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElement";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">I am Dreamer</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="Think">Think Developer</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="AboutMe">About Me</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Portfolio">Portfolio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="ContractMe">Contract Me</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="Needin">Resume</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
