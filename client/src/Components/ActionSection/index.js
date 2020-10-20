import React, { useState } from "react";
import { Button } from "../ButtonElements";
import Video from "../../videos/MVI_0358.mp4";
import {
  ActionContainer,
  ActionBg,
  VideoBg,
  ActionContent,
  ActionH1,
  ActionH2,
  ActionBtnWrapper,
  //ActionP,
  ArrowForward,
  ArrowRight,
} from "./ActionElements";

export const ActionSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <ActionContainer>
      <ActionBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </ActionBg>
      <ActionContent>
        <ActionH1 id="s1">
          개발자,
          <br /> 어떤 사람이여야 될까요?
        </ActionH1>
        <ActionH2>효율적인 코드를 짜는 사람?</ActionH2>
        <ActionH2>트랜디한 사람?</ActionH2>
        <ActionBtnWrapper>
          <Button
            to="Think"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            Bright="true"
          >
            여러분은 어떻게 생각하세요?
            {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </ActionBtnWrapper>
      </ActionContent>
    </ActionContainer>
  );
};
