import React, { useState } from "react";

import { ActionSection } from "../Components/ActionSection";
import { AboutSection } from "../Components/AboutSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../Components/AboutSection/Data";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/SideBar";
import Portfolio from "../Components/Portfolio";
import Footer from "../Components/Footer";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ActionSection />
      <AboutSection {...homeObjOne} />
      <AboutSection {...homeObjTwo} />
      <AboutSection {...homeObjThree} />
      <Portfolio />
      <Footer />
    </>
  );
};

export default Home;
