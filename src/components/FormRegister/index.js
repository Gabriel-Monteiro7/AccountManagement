import React, { useState } from "react";
import {
  Container,
  Button,
  ContainerSwitch,
  LabelSwitch,
  ContainerButton,
} from "./styles";
import Input from "components/InputRegister";
import { useDispatch, useSelector } from "react-redux";
import { insertRequest, updateRequest } from "store/modules/account/actions";
import Switch from "react-switch";
import { useLocation } from "react-router-dom";
export default function FormRegister({ schema, fields = [], children }) {
  let user = useSelector((state) => state.user.profile);
  const [loading, setLoading] = useState(false);
  const { state } = useLocation();
  const dispatch = useDispatch();
  function handleSubmit(data, { resetForm }) {
    if (paid || received === true) data.date = new Date().toISOString().substr(0, 16);
    setLoading(true);
    let type = state.type === "Despesa" ? { paid } : { received };
    data = { ...state.data, ...data, ...type };
    if (state.data) {
      dispatch(updateRequest(data, user, state.type));
    } else {
      dispatch(insertRequest(data, user, state.type));
    }

    // resetForm();
  }

  const [paid, setPaid] = useState(state?.data?.paid || false);
  const [received, setReceived] = useState(state?.data?.received || false);

  return (
    <Container
      schema={schema}
      onSubmit={handleSubmit}
      initialData={state?.data}
    >
      {fields.map((input, index) => {
        return (
          <Input
            key={index}
            {...input}
            onChange={(valor) => {
            }}
          />
        );
      })}
      {state.data && (
        <ContainerSwitch>
          <LabelSwitch>
            {state.type === "Despesa" ? "Paga?" : "Recebida?"}
          </LabelSwitch>
          <Switch
            checked={state.type === "Despesa" ? paid : received}
            onChange={() => {
              if (state.type === "Despesa") setPaid(!paid);
              else setReceived(!received);
            }}
            onColor={"#888888"}
            onHandleColor="#18c78a"
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            height={20}
            width={48}
            className="react-switch"
            id="material-switch"
          />
        </ContainerSwitch>
      )}

      {children}
      <ContainerButton>
        <Button type="submit">
          {loading ? "Carregando..." : state.data ? "Editar" : "Cadastrar"}
        </Button>
      </ContainerButton>
    </Container>
  );
}
