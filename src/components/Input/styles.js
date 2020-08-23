import styled, { css } from "styled-components";
import { Input } from "@rocketseat/unform";
import { FaEye, FaEyeSlash } from "react-icons/all";

const icon = css`
  font-size: 22px !important;
  font-weight: 500 !important;
  color: #bbbbbb !important;
`;

export const Container = styled.div`
  min-height: 76px;
  position: relative;
  text-align: start;
  width: ${(props) => props.width || "100"}%;
  i {
    right: 3px;
    position: absolute;
    bottom: 30px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.42);
  }
  label {
    margin: 0;
    color: rgba(0, 0, 0, 0.54);
    font-size: 0.8rem;
    font-weight: bold;
  }
  span {
    font-size: 12px;
    color: #fa5858;
  }
  input {
    border: 0;
    border-bottom: 2px solid rgba(0, 0, 0, 0.42);
    width: 100%;
    padding-right: 30px;
    font-size: 1rem;
    margin: 5px 0px;
    padding-left: 0px;
    &:focus,
    &:active {
      border-bottom: 2px solid #18c78a;
    }
    transition: 0.2s ease-in-out;
  }
`;

export const Field = styled(Input)``;
export const IconeEye = styled(FaEye)`
  ${icon}
`;
export const IconeEyeSlash = styled(FaEyeSlash)`
  ${icon}
`;

export const ContainerIcon = styled.div`
  display: inline-block;
  right: 0px;
  top: 30px;
  position: absolute;
  cursor: ${(props) => props.password};
`;
