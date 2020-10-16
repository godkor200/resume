import React from "react";
import {
  Icon,
  CloseIcon,
  SidebarContainer,
  SidebarMenu,
  SidebarLink,
  SidebarWrapper,
  SidebtnWrap,
  SidebarRoute,
} from "./SidebarElement";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon coClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="Think" onClick={toggle}>
            Think
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About Me
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink to="Portfolio" onClick={toggle}>
            Portfolio
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink to="ContractMe" onClick={toggle}>
            Contract Me
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink to="Needin" onClick={toggle}>
            Resume
          </SidebarLink>
        </SidebarMenu>
        <SidebtnWrap>
          <SidebarRoute>Need My Resume?</SidebarRoute>
        </SidebtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
export default Sidebar;
