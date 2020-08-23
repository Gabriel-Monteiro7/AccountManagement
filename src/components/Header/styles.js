import styled from "styled-components";
import { sm } from "styles/global";
export const Container = styled.div`
  background: var(--color-primary);
`;
export const Title = styled.h1`
  color: var(--color-title-in-primary);
  font-family: sans-serif;
  font-weight: 700;
  @media (max-width: ${sm}px) {
    font-size: 2rem !important;
  }
`;
export const HeaderContent = styled.header.attrs({ className: "header" })`
  max-width: 1100px;
  margin: 79px auto 0px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 60px 0px 100px;
`;
export const Button = styled.button`
  height: 50px;
  background: transparent;
  border: 2px solid var(--color-secundary) !important;
  color: #ffffff;
  border-radius: 30px;
  width: 220px;
  color: var(--color-secundary);
  opacity: 0.7;
  font-weight: bold;
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
  @media (max-width: ${sm}px) {
    margin: 25px 0px;
  }
`;
