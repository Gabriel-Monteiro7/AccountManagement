import styled from "styled-components";
import { sm, md } from "styles/global";

export const Container = styled.div``;

export const Main = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 40px 0px;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${sm}px) {
    justify-content: center;
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
export const NoRecipes = styled.label`
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
