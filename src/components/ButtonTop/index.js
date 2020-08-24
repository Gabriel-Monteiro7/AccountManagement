import React from "react";

// import { Container } from './styles';
import { FaChevronUp } from "react-icons/fa";
import StyledButton from "./styles";
export default function ButtonTop(props) {
  return (
    props.positionTop > 200 && (
      <StyledButton
      title={"Para o topo"}
        onClick={() => {
          window.scroll({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <FaChevronUp />
      </StyledButton>
    )
  );
}
