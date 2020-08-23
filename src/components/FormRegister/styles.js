import styled from "styled-components";
import { Form } from "@rocketseat/unform";
import { md, sm } from "styles/global";

export const Container = styled(Form)`
  position: relative;
  top: -70px;
  display: flex;
  max-width: 1100px;
  width: 90%;
  margin: auto;
  justify-content: space-between;
  flex-wrap: wrap;
  background: #ffffff;
  padding: 40px 40px 80px;
  border-radius: 25px;
  input {
    width: 100%;
  }
  @media (max-width: ${sm}px) {
    width: 100%;
    padding: 40px 20px;
  }
`;
export const ContainerButton = styled.div`
  width: 100%;
  text-align: center;
`;
export const Button = styled.button`
  border: 0px;
  background: var(--color-primary);
  margin: 80px auto 0px;
  color: white;
  padding: 16px 90px;
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

export const ContainerSwitch = styled.div`
  width: 50%;

  margin: 20px 0px;
  @media (max-width: ${md}px) {
    width: 100%;
  }
`;

export const LabelSwitch = styled.label`
  font: bold 1.2rem Archivo;
  color: var(--color-primary);
  width: 100%;
  margin-bottom: 25px;
`;
