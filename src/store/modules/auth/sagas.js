import { takeLatest, put, all } from "redux-saga/effects";

import history from "service/history";
import { toast } from "react-toastify";
import { singInSuccess, singFailure } from "./actions";
import fire from "config/firebase";
export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    let { user } = yield fire
      .auth()
      .signInWithEmailAndPassword(email, password);
    user = { token: user.uid, email: user.email };
    yield put(singInSuccess(user.token, user));
    history.push("/home");
  } catch (erro) {
    toast.error("Erro na autenticação");
    yield put(singFailure());
  }
}
export function* singOut() {
  try {
    yield fire.auth().signOut();
    history.push("/");
  } catch (erro) {
    toast.error("Erro ao deslogar");
  }
}
export default all([
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_OUT", singOut),
]);
