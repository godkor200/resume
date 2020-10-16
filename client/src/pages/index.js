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
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          height: "90vh",
        }}
      >
        {/* <h1 id="s1">
          개발자,
          <br />
          어떤 사람이여야 될까요?
        </h1>
        <h1 id="s2">코드를 잘짜는 사람?</h1> */}
      </div>
    </>
  );
};

export default Home;
