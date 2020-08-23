import React from "react";

import { ContainerInput, Input } from "./styles";

export default function ReactInput({ width, multiline, ...rest }) {
  return (
    <ContainerInput width={width || 100} multiline={multiline}>
      <Input {...rest} multiline={multiline} />
    </ContainerInput>
  );
}
