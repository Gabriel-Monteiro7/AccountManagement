import { takeLatest, all } from "redux-saga/effects";

import { toast } from "react-toastify";
import fire from "config/firebase";
export function* register({ payload }) {
  try {
    const { email, password } = payload;

    yield fire.auth().createUserWithEmailAndPassword(email, password);
    // user.currentUser.displayName = displayName;
  } catch (erro) {
    toast.error("Usuário ja cadastrado com este email");
  }
}
export default all([takeLatest("@user/REGISTER_REQUEST", register)]);
