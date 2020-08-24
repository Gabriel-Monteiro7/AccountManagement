import React from "react";
import {
  Container,
  Image,
  Paid,
  Description,
  Value,
  ButtonEdit,
  ButtonDelete,
  Footer,
  Information,
  IconPen,
  SpanCard,
  IconClosed,
} from "./styles";
import { formatPrice, formatDate } from "utils";
import history from "service/history";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { deleteRequest } from "store/modules/account/actions";
export default function Card({ data, type }) {
  let typeCard = type === "Receita" ? "received" : "paid";

  const dispatch = useDispatch();
  function onDelete() {
    Swal.fire({
      title: "Deseja deletar esta despesa?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Deletar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        dispatch(deleteRequest(data, type));
        Swal.fire({
          icon: "success",
          title: "Despesa deletada com sucesso",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }
  return (
    <Container>
      <Image />
      <ButtonDelete onClick={() => onDelete()} title={"Deletar"}>
        <IconClosed />
      </ButtonDelete>
      <SpanCard>{formatDate(data.date)}</SpanCard>
      <Information>
        <Description>{data.description}</Description>
        <Footer>
          <div>
            <Value>{formatPrice(data.value)}</Value>
            <Paid paid={data[typeCard]}>
              {data[typeCard]
                ? `${type === "Receita" ? "Recebido" : "Pago"}`
                : `Não ${type === "Receita" ? "Recebido" : "Pago"}`}
            </Paid>
          </div>
          <ButtonEdit
            title={"Editar"}
            onClick={() => {
              history.push("/register", { data, type });
            }}
          >
            <IconPen />
          </ButtonEdit>
        </Footer>
      </Information>
    </Container>
  );
}
