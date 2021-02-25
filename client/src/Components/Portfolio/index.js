import React from 'react';
import Icon1 from '../../Logo/undraw_Portfolio_re_qwm5.svg';
import Icon2 from '../../Logo/undraw_Portfolio_update_re_jqnp (1).svg';
import Icon3 from '../../Logo/undraw_portfolio_feedback_exfk.svg';
import {
  PortfolioContainer,
  PortfolioH1,
  PortfolioWrapper,
  PortfolioCard,
  PortfolioIcon,
  PortfolioH2,
  PortfolioP,
  AboutSLinkA,
} from './PortfolioElements';
const Portfolio = () => {
  return (
    <>
      <PortfolioContainer id="Portfolio">
        <PortfolioH1>Portfolio</PortfolioH1>
        <PortfolioWrapper>
          <PortfolioCard>
            <AboutSLinkA href="https://dev.myfamas.com/">
              <PortfolioIcon src={Icon1} />
              <PortfolioH2>FAMAS'S COM</PortfolioH2>
              <PortfolioP>시니어들을 위한 IT교육 사이트</PortfolioP>
            </AboutSLinkA>
          </PortfolioCard>
          <PortfolioCard>
            <PortfolioIcon src={Icon2} />
            <PortfolioH2></PortfolioH2>
            <PortfolioP>곧 올리도록하겠습니다.</PortfolioP>
          </PortfolioCard>
          <PortfolioCard>
            <PortfolioIcon src={Icon3} />
            <PortfolioH2></PortfolioH2>
            <PortfolioP>많은 피드백 부탁드려요.</PortfolioP>
          </PortfolioCard>
        </PortfolioWrapper>
      </PortfolioContainer>
    </>
  );
};

export default Portfolio;
