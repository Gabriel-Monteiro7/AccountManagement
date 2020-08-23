import styled from "styled-components";
import { sm, md} from "styles/global";
import { FiArrowDown, FiArrowUp } from "react-icons/all";
export const Container = styled.div`
  min-height: 100vh;
`;

export const Main = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 40px 0px;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${md}px) {
    justify-content: space-space-evenly;
  }
`;
export const Load = styled.div`
  width: 300px;
  margin: auto;
  & div {
    pointer-events: none !important;
  }
  @media (max-width: ${sm}px) {
    width: 200px;
  }
`;
export const NoAccount = styled.label`
  color: #d8d8d8;
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  margin: auto;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  min-height: 250px;
  @media (max-width: ${md}px) {
    font-size: 20px;
  }
`;
export const Card = styled.div`
  width: 31%;
  display: block;
  padding: 20px;
  @media (max-width: ${sm}px) {
    width: 100%;
  }
`;
export const TitleCard = styled.h4`
  border-bottom: 2px solid;
  width: 50px;
  padding-bottom: 5px;
  @media (max-width: ${md}px) {
    font-size: 1.2rem !important;
    width: 25px;
  }
`;
export const ValueCard = styled.label`
  margin: 10px 0px 0px;
  font-weight: bold;
  font-size: 2rem;
  width: 100%;
  color: ${(props) => props.color || "#1111111"};
  white-space: nowrap;
  overflow: hidden;
  margin: 0;
  text-overflow: ellipsis;
  @media (max-width: ${md}px) {
    font-size: 1.5rem;
  }
`;
export const DateCard = styled.span`
  margin: 10px 0px;
  font-weight: bold;
  font-size: 1.2rem;
  color: #5d5b5b;
  @media (max-width: ${sm}px) {
    font-size: 1rem;
  }
`;
export const FooterCard = styled.span`
  font-weight: bold;
  font-size: 0.8rem;
  color: #5d5b5b;
  @media (max-width: ${md}px) {
    font-size: 0.6rem;
  }
`;
export const ContainerChart = styled.div`
  height: 400px;
  width: 100%;
  margin: 50px auto 0px;
  border-radius: 25px;
  padding: 20px;
  @media (max-width: ${md}px) {
    height: 280px;
  }
  .recharts-wrapper {
    overflow: hidden;
  }
`;

export const ContainerDefaultPrice = styled.div`
  label {
    color: red;
    width: 100%;
  }
`;
export const ContainerICon = styled.div`
  background: ${(props) => props.color};
  align-items: center;
  justify-content: center;
  width: 40px;

  margin-right: 20px;
  display: inline-flex;
  height: 40px;
  border-radius: 100%;
`;

export const IconUp = styled(FiArrowUp)`
  color: white;
`;
export const IconDown = styled(FiArrowDown)`
  color: white;
`;
