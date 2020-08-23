import * as Yup from "yup";

export const schema = Yup.object().shape({
  description: Yup.string().required("Campo obrigatório"),
  value: Yup.number()
    .positive("Só valores positivos")
    .typeError("Campo obrigatório"),
  date: Yup.string().required("Campo obrigatório"),
  // paid: Yup.boolean().required("Campo obrigatório"),
});

export const fields = [
  {
    placeholder: "Digite a descrição",
    label: "Descrição *",
    name: "description",
    width: 48,
  },
  {
    placeholder: "Digite o valor",
    label: "Valor *",
    name: "value",
    width: 50,
    type: "number",
    min: 0,
  },
  {
    placeholder: "",
    label: "Data *",
    name: "date",
    width: 48,
    type: "datetime-local",
    // min: new Date().toISOString().substr(0, 19),
  },
  // {
  //   placeholder: "",
  //   label: "Já foi paga? *",
  //   name: "paid",
  //   width: 50,
  // },
];
