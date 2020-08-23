import React, { useState } from "react";
import {
  Container,
  Field,
  IconeEye,
  IconeEyeSlash,
  ContainerIcon,
} from "./styles";
export default function Input({ icon, placeholder, label, name, width }) {
  const [inputVisibility, setInputVisibility] = useState(
    icon === "visibility" ? false : true
  );
  function changePassWord() {
    if (icon === "visibility") {
      setInputVisibility(!inputVisibility);
    }
  }
  return (
    <Container width={width}>
      <Field
        name={name}
        type={inputVisibility ? "text" : "password"}
        placeholder={placeholder}
        label={label}
      />
      {icon && (
        <ContainerIcon
          password={icon === "visibility" ? "pointer" : "default"}
          onClick={() => {
            changePassWord();
          }}
        >
          {inputVisibility ? <IconeEye /> : <IconeEyeSlash />}
        </ContainerIcon>
      )}
    </Container>
  );
}
