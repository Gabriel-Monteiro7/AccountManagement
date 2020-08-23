import React from "react";
import { Container } from "./styles";
import Form from "components/FormRegister";
import { fields, schema } from "./data";
import { useLocation } from "react-router-dom";
import Header from "components/Header";
export default function Home(props) {
  const { state } = useLocation();
  let label = state.type === "Receita" ? "receitas" : "despesas";
  return (
    <Container>
      <Header title={"Cadastre sua " + label} />
      <Form schema={schema} fields={fields} />
    </Container>
  );
}
