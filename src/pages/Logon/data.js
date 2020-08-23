import * as Yup from "yup";

export const schema = [
  Yup.object().shape({
    password_register: Yup.string().required("Campo obrigatório"),
    email_register: Yup.string().required("Campo obrigatório"),
    displayName: Yup.string().required("Campo obrigatório"),
  }),
  Yup.object().shape({
    password: Yup.string().required("Campo obrigatório"),
    email: Yup.string().required("Campo obrigatório"),
  }),
];

export const fields = [
  [
    {
      placeholder: "Seu Nome",
      label: "Nome",
      name: "displayName",
    },
    {
      placeholder: "Seu email",
      label: "Email",
      name: "email_register",
    },
    {
      icon: "visibility",
      placeholder: "Sua senha",
      label: "Senha",
      name: "password_register",
    },
  ],
  [
    {
      placeholder: "Seu email",
      label: "Email",
      name: "email",
    },
    {
      icon: "visibility",
      placeholder: "Sua senha",
      label: "Senha",
      name: "password",
    },
  ],
];
