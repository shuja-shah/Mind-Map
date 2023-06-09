import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import nodesReducer from "./nodes";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  nodes: nodesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore(
  {
    reducer: persistedReducer,
  },
  applyMiddleware
);

const persistor = persistStore(store);
export { persistor };
export default store;
