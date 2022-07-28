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
    AboutSLinkA,
    PortfolioDescription,
} from "./PortfolioElements";

const Portfolio = () => {
    return (
        <>
            <PortfolioContainer id="portfolio">
                <PortfolioH1>Portfolio</PortfolioH1>
                <PortfolioWrapper>
                    <PortfolioCard>
                        <AboutSLinkA href="https://github.com/codestates/famasCom_server">
                            <PortfolioIcon src={Icon1} />
                            <PortfolioH2>FAMAS'S COM</PortfolioH2>
                            <PortfolioP>시니어들을 위한 IT교육 사이트</PortfolioP>
                            <PortfolioDescription></PortfolioDescription>
                        </AboutSLinkA>
                    </PortfolioCard>
                    <PortfolioCard>
                        <AboutSLinkA href="https://d1ydzsbbzcbcbh.cloudfront.net/">
                            <PortfolioIcon src={Icon2} />
                            <PortfolioH2>imdesign.shop</PortfolioH2>
                            <PortfolioP>만들면 디자인이 된다</PortfolioP>
                        </AboutSLinkA>
                    </PortfolioCard>
                    <PortfolioCard>
                        <AboutSLinkA href="https://github.com/godkor200/workoutScheduler">
                            <PortfolioIcon src={Icon3} />
                            <PortfolioH2>What Day</PortfolioH2>
                            <PortfolioP>MZ세대 운동 인증 소셜 네트워킹앱</PortfolioP>
                            <PortfolioDescription></PortfolioDescription>
                        </AboutSLinkA>
                    </PortfolioCard>
                </PortfolioWrapper>
            </PortfolioContainer>
        </>
    );
};

export default Portfolio;
