import { takeLatest, put, all } from "redux-saga/effects";

import history from "service/history";
import { toast } from "react-toastify";
import {
  insertSuccess,
  updateSuccess,
  getSuccess,
  deleteSuccess,
} from "./actions";
import fire from "config/firebase";

export function* insert({ payload }) {
  let { data, user, type } = payload;
  try {
    const db = fire.firestore();
    const response = yield db
      .collection(type)
      .add({ ...data, userId: user.token });
    data = { ...data, id: response.id };
    toast.success(type + " cadastrada");
    type = type === "Despesa" ? "expenses" : "recipes";
    yield put(insertSuccess(data, type));
    history.goBack();
  } catch (erro) {
    toast.error("Erro na inserção");
  }
}

export function* update({ payload }) {
  let { data, user, type } = payload;
  let { id } = data;

  delete data.id;
  try {
    const db = fire.firestore();
    yield db
      .collection(type)
      .doc(id)
      .update({ ...data, userId: user.token });
    toast.success(type + " cadastrada");
    type = type === "Despesa" ? "expenses" : "recipes";
    data = { ...data, id };
    yield put(updateSuccess(data, type));
    history.goBack();
  } catch (erro) {
    toast.error("Erro na edição");
  }
}
export function* deleteAccount({ payload }) {
  let { data, type } = payload;
  try {
    const db = fire.firestore();
    yield db.collection(type).doc(data.id).delete();
    type = type === "Despesas" ? "expense" : "recipes";
    yield put(deleteSuccess(data, type));
  } catch (erro) {
    toast.error("Erro ao deletar");
  }
}

function* get({ payload }) {
  let { user } = payload;
  let total = {balance:0,recipes:0,expenses:0};
  let array = {};
  let chart = {};
  let month = new Date().toISOString().substr(0, 4);
  try {
    const db = fire.firestore();
    let response = yield db
      .collection("Despesa")
      .where("userId", "==", user.token)
      .get();
    array.expenses = response.docs.map((doc) => {
      let docAux = doc.data();
      if (docAux.paid === true && docAux.date.substr(0, 4) === month) {
        let index = docAux.date.substr(8, 2);
        chart[index] = {
          name: index,
          receitas: chart[index]?.receitas || 0,
          despesas: chart[index]?.despesas || 0 + docAux.value,
        };
        total.expenses+=docAux.value;
        total.balance -= docAux.value;
      }
      return { ...docAux, id: doc.id };
    });
    response = yield db
      .collection("Receita")
      .where("userId", "==", user.token)
      .get();
    array.recipes = response.docs.map((doc, index) => {
      let docAux = doc.data();
      if (docAux.received === true && docAux.date.substr(0, 4) === month) {
        let index = docAux.date.substr(8, 2);
        chart[index] = {
          name: index,
          despesas: chart[index]?.despesas || 0,
          receitas: chart[index]?.receitas || 0 + docAux.value,
        };
        total.recipes+=docAux.value
        total.balance += docAux.value;
      }
      return { ...docAux, id: doc.id };
    });
    yield put(getSuccess(array, total, chart));
  } catch (erro) {
    console.log(erro);
    toast.error("Erro na listagem");
  }
}

export default all([
  takeLatest("@account/INSERT_REQUEST", insert),
  takeLatest("@account/UPDATE_REQUEST", update),
  takeLatest("@account/GET_REQUEST", get),
  takeLatest("@account/DELETE_REQUEST", deleteAccount),
]);
