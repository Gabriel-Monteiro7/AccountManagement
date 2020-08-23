/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
  Container,
  ButtonOption,
  ContainerInside,
  ContainerItem,
  ContainerItems,
  NewUser,
} from "./styles";
import Form from "components/FormLogin";
import { schema, fields } from "./data";
export default function Logon() {
  const options = ["Cadastrar", "Entrar"];
  const [optionSelected, setOptionSelected] = useState("Cadastrar");
  function move(option) {
    let position = 0;
    if (option === "Entrar") position = 30;
    else position = -30;

    let items = document.querySelector(".items");
    items.scrollBy(position, 0);
    setOptionSelected(option);
  }
  useEffect(() => {
    move("Entrar");
  }, []);
  return (
    <Container>
      <ContainerInside>
        <div>
          {options.map((option, index) => {
            return (
              <ButtonOption
                title={option}
                key={index}
                selected={option === optionSelected}
                onClick={() => {
                  move(option);
                }}
              >
                {option}
              </ButtonOption>
            );
          })}
        </div>
        <ContainerItems>
          {options.map((option, index) => {
            return (
              <ContainerItem key={index}>
                <Form
                  move={(option) => move(option)}
                  schema={schema[index]}
                  fields={fields[index]}
                  button={option}
                >
                  {index === 1 && (
                    <NewUser
                      title={"Não possui cadastro?"}
                      onClick={() => {
                        move("Cadastrar");
                      }}
                    >
                      Não possui cadastro?
                    </NewUser>
                  )}
                </Form>
              </ContainerItem>
            );
          })}
        </ContainerItems>
      </ContainerInside>
    </Container>
  );
}
