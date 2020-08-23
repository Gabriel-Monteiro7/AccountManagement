import { format} from "date-fns";
import { ptBR } from "date-fns/locale";

export const { format: formatPrice } = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});

export const formatDate = (date) => {
  return format(new Date(date), "dd'/'MM'/'yyyy", {
    locale: ptBR,
  });
};
export const formatDateDefault = (date) => {
  return format(date, "MMM dd', 'yyyy");
};