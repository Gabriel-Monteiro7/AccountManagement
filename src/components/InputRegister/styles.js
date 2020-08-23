import styled from "styled-components";
import { Input as NewInput } from "@rocketseat/unform";
import { md } from "styles/global";

export const Input = styled(NewInput)`
  width: 100%;
  padding: 0.8rem 1.2rem;
  outline: none;
  border: 0px;
  border-radius: 1rem;
  font-size: 1.3rem;
  min-height: 67px;
  border: 1px solid #e6e6f0;
  background: #fafafc;
  color: #797979;
`;

export const ContainerInput = styled.div.attrs({
  className: "container-input",
})`
  margin: 20px 0px;
  display: inline-block;
  position: relative;
  width: ${(props) => `${props.width}%`};
  label {
    font: bold 1.2rem Archivo;
    color: var(--color-primary);
  }
  &:focus-within::after {
    width: calc(100% -3.2rem);
    height: 2px;
    content: "";
    background: var(--color-primary);
    position: absolute;
    left: 1.2rem;
    right: 1.2rem;
    bottom: ${(props) => (props.multiline ? "6px" : "1px")};
  }
  span {
    font-size: 12px;
    color: #fe2e2e;
    margin-top: 5px;
    padding-left: 10px;
    bottom: -18px;
    left: 0;
    position: absolute;
  }
  textarea + span {
    bottom: -12px;
  }
  @media (max-width: ${md}px) {
    width: 100%;
  }
`;
