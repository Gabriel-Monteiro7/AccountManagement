import { combineReducers } from "redux";
import auth from "./auth/reducer";
import user from "./user/reducer";
import account from "./account/reducer";
const reducers = combineReducers({
  // Remova essa linha depois de adicionar seus ducks
  auth,
  user,
  account,
});

export default reducers;
