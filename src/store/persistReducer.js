import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: "account-manager",
      storage,
      whitelist: ["auth", "user", "account"],
    },
    reducers
  );
  return persistedReducer;
};
