import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #464646;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const SidebarWrapper = styled.div`
  color: #fff;
`;
export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  padding: 1rem;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #010606;
  }
`;
export const SidebtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 80px);
  text-align: center;
  @media screen and(max-width:480px) {
    grid-template-rows: repeat(6, 60px);
  } ;
`;
export const SidebarRoute = styled(LinkR)`
  border-radius: 100px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-size: 1.5rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
// export const Nav = styled.nav`;
//   background: #00498c;
//   height: 80px;
//   display: flex;
//   justify-content: space-between;
//   font-size: 1rem;
//   padding: 0.5rem calc((100vw - 1000px) / 2);
//   z-index: 10;
//   position: sticky;
//   @media screen and (max-width: 960px) {
//     transition: 0.8s all ease;
//   }
//   /* Third Nav */
//   /* justify-content: flex-start; */
// `;
// export const NavbarContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   height: 60px;
//   z-index: 1;
//   width: 100%;
//   padding: 0 24px;
//   max-width: 1100px;
// `;

// export const NavLogo = styled(LinkR)`
//   color: #fff;
//   justify-self: flex_start;
//   cursor: pointer;
//   font-size: 2rem;
//   display: flex;
//   align-items: center;
//   margin-left: 0px;
//   text-decoration: none;
// `;
// export const MobileIcon = styled.div`
//   display: none;
//   color: #fff;
//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 60%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;
// export const NavMenu = styled.ul`
//   display: flex;
//   align-items: center;
//   list-style: none;
//   text-align: center;
//   margin-right: -22px;
//   @media screen and (max-width: 768px) {
//     display: none;
//   } ;
// `;

// export const NavItem = styled.li`
//   height: 80px;
// `;

// export const NavLinks = styled(LinkS)`
//   border-radius: 100px;
//   color: #fff;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 100%;
//   cursor: pointer;
//   &.active {
//     border-bottom: 3px solid #01bf71;
//   }
// `;
// export const NavBtn = styled.nav`
//   color: #fff;
//   display: flex;
//   align-items: center;
//   cursor: pointer;
//   @media screen and(max-width:768px) {
//     display: none;
//   } ;
// `;

// export const NavBtnLink = styled(LinkR)`
//   border-radius: 50px;
//   background: #00b5d5;
//   white-space: nowrap;
//   padding: 10px 22px;
//   color: #010606;
//   font-size: 16px;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #010606;
//   }
// `;

//export const FaBars = styled(FaBars)``;

// export const NavLink = styled(Link)`
//   color: #fff;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 100%;
//   cursor: pointer;
//   &.active {
//     color: #15cdfc;
//   }
// `;

// export const Bars = styled(FaBars)`
//   display: none;
//   color: #fff;
//   @media screen and (max-width: 768px) {
//     display: block;
//     position: center;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;

// export const NavMenu = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: -24px;
//   /* Second Nav */
//   /* margin-right: 24px; */
//   /* Third Nav */
//   /* width: 100vw;
//   white-space: nowrap; */
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;
//   margin-right: 24px;
//   /* Third Nav */
//   /* justify-content: flex-end;
//   width: 100vw; */
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const NavBtnLink = styled(Link)`
//   border-radius: 4px;
//   background: #256ce1;
//   padding: 10px 22px;
//   color: #fff;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;
//   /* Second Nav */
//   margin-left: 24px;
//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #010606;
//   }
// `;
