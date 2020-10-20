import styled from "styled-components";

export const PortfolioContainer = styled.div`
  background: #c7c9c9;
  height: 800px;
  display: flex;
  padding: 30px;
  flex-direction: column;
  justify-content: top;
  align-items: center;

  @media screen and (max-width: 1000px) {
    height: 1250px;
  }
  @media screen and (max-width: 800px) {
    height: 1400px;
  }
`;
export const PortfolioWrapper = styled.div`
  height: 500px;
  margin: 0 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 40px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
export const PortfolioCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 440px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 1);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const PortfolioH1 = styled.h1`
  font-size: 3.5rem;
  color: #000000;
  padding-bottom: 30px;
`;

export const PortfolioIcon = styled.img`
  height: 260px;
  width: 260px;
  margin-bottom: 0px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const PortfolioH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;
export const PortfolioP = styled.p`
  font-size: 2rem;
  text-align: center;
`;
