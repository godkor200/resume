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
          <SidebarLink to="AboutMe" onClick={toggle}>
            About Me
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink to="Portfolio" onClick={toggle}>
            Portfolio
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink to="Footer" onClick={toggle}>
            Contract Me
          </SidebarLink>
        </SidebarMenu>
        <SidebtnWrap>
          <SidebarRoute to="/signin">Resume</SidebarRoute>
        </SidebtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
export default Sidebar;
