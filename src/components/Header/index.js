import React from "react";
import { Container, Title, HeaderContent, Button } from "./styles";
import history from "service/history";
export default function Header({ title, label, path }) {
  return (
    <Container>
      <HeaderContent>
        <Title>{title}</Title>
        {label && (
          <Button
            title={label}
            onClick={() => {
              history.push("/register", { type: path });
            }}
          >
            {label}
          </Button>
        )}
      </HeaderContent>
    </Container>
  );
}
