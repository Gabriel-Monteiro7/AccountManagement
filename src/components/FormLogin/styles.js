import styled from "styled-components";
import { Form } from "@rocketseat/unform";
import { md } from "styles/global";

export const Container = styled(Form)`
  flex-direction: column;
  display: flex;
  width: 80%;
`;
export const Button = styled.button`
  border: 0px;
  background: #1d0e60;
  margin: 20px auto;
  color: white;
  padding: 12px 90px;
  border-radius: 50px;
  opacity: 0.9;
  transition: 0.3s ease-in-out;
  min-width: 210px;
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    opacity: 1;
  }
  @media (max-width: ${md}px) {
    min-width: 200px;
    padding: 13px 70px;
  }
`;
