import React from "react";
import { Container, Button } from "./styles";
import Input from "components/Input";
import { useDispatch, useSelector } from "react-redux";
import { singInRequest } from "store/modules/auth/actions";
import { registerRequest } from "store/modules/user/actions";

export default function FormLogin({
  schema,
  fields = [],
  children,
  button,
  move,
}) {
  const dispatch = useDispatch();
  let { loading } = useSelector((state) => state.auth);
  function handleSubmit(data, { resetForm }) {
    data = {
      ...data,
      email: data.email || data.email_register,
      password: data.password || data.password_register,
    };
    if (children) {
      dispatch(singInRequest(data.email, data.password));
    } else {
      dispatch(registerRequest(data.email, data.password, data.displayName));
      move("Entrar");
      resetForm();
    }
  }
  return (
    <Container schema={schema} onSubmit={handleSubmit}>
      {fields.map((input, index) => {
        return <Input key={index} {...input} />;
      })}
      {children}
      <Button type="submit" title={button}>
        {loading ? "Carregando..." : button}
      </Button>
    </Container>
  );
}
