import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaBlog } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  FooterLinksContainer,
  SocialMedia,
  SocialLogo,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements.js";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer id="Footer">
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>About Me</FooterLinkTitle>
              <FooterLink onClick={toggleHome}>인사말</FooterLink>
              <FooterLink to="/signin">이력서</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <SocialMediaWrap>
                <SocialIcons>
                  <SocialIconLink
                    href="/"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </SocialIconLink>
                  <SocialIconLink
                    href="https://www.instagram.com/y.byeonggug/"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </SocialIconLink>
                  <SocialIconLink
                    href="https://www.youtube.com/channel/UCu044rPK6FYNSpYYCY5zVMw?view_as=subscriber"
                    target="_blank"
                    aria-label="Youtube"
                  >
                    <FaYoutube />
                  </SocialIconLink>
                  <SocialIconLink
                    href="https://velog.io/@godkor200"
                    target="_blank"
                    aria-label="Blog"
                  >
                    <FaBlog />
                  </SocialIconLink>
                </SocialIcons>
              </SocialMediaWrap>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialLogo to="/" onClick={toggleHome}>
            Googi
          </SocialLogo>
          <WebsiteRights>
            Copyright © {new Date().getFullYear()} Googi All Rights Reserved.
          </WebsiteRights>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
