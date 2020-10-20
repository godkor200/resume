import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  //네비바 고정부분
  background: ${({ scrollNav }) => (scrollNav ? "black" : "transparent")};
  height: 80px;
  margin-top: -80px; //--->고정
  top: 0; //--> 고정
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  position: sticky;
  opacity: 0.8;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
  /* Third Nav */
  /* justify-content: flex-start; */
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex_start;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-left: 0px;
  text-decoration: none;
`;
export const MobileIcon = styled.div`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;
export const NavBtn = styled.nav`
  color: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media screen and(max-width:768px) {
    display: none;
  } ;
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    display: none;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #000000;
  }
`;
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

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
