import React from "react";
import Icon1 from "../../Logo/undraw_Portfolio_re_qwm5.svg";
import Icon2 from "../../Logo/undraw_Portfolio_update_re_jqnp (1).svg";
import Icon3 from "../../Logo/undraw_portfolio_feedback_exfk.svg";
import {
  PortfolioContainer,
  PortfolioH1,
  PortfolioWrapper,
  PortfolioCard,
  PortfolioIcon,
  PortfolioH2,
  PortfolioP,
} from "./PortfolioElements";
const Portfolio = () => {
  return (
    <>
      <PortfolioContainer id="Portfolio">
        <PortfolioH1>Portfolio</PortfolioH1>
        <PortfolioWrapper>
          <PortfolioCard>
            <PortfolioIcon src={Icon1} />
            <PortfolioH2></PortfolioH2>
            <PortfolioP>포트폴리오는 아직 없어요</PortfolioP>
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
