import React from "react";
import {
  AboContainer,
  Abowrapper,
  AboRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  Subtitle,
  TopLine,
  BtnWrap,
  ImgWrap,
  Img,
  SigninRoute,
} from "./AboutElements";
import { Button } from "../ButtonElements";

export const AboutSection = ({
  TopLineCol,
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  darkText,
  buttonLabel,
  img,
  alt,
  headline,
  description,
  dark2,
  dark,
  primary,
}) => {
  return (
    <>
      <AboContainer lightBg={lightBg} id={id}>
        <Abowrapper>
          <AboRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine TopLineCol={TopLineCol}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  {id === "AboutMe" ? (
                    <SigninRoute to="/signin">{buttonLabel}</SigninRoute>
                  ) : (
                    <Button
                      to={
                        id === "Think" || id === "ThinkMore"
                          ? "AboutMe"
                          : "/signin"
                      }
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      {buttonLabel}
                    </Button>
                  )}
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </AboRow>
        </Abowrapper>
      </AboContainer>
    </>
  );
};
