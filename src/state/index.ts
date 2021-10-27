import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { save, load } from "redux-localstorage-simple";

import { useDispatch } from "react-redux";
import farmsReducer from "./farms";
import blockReducer from "./block";

import application from "./application/reducer";
import { updateVersion } from "./global/actions";
import user from "./user/reducer";
import transactions from "./transactions/reducer";
import lottery from "./lottery";
import swap from "./swap/reducer";
import mint from "./mint/reducer";
import lists from "./lists/reducer";
import burn from "./burn/reducer";
import limit from "./limit/reducer";
import multicall from "./multicall/reducer";

const PERSISTED_KEYS: string[] = ["user", "transactions", "lists"];

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    block: blockReducer,
    farms: farmsReducer,

    // Exchange
    application,
    user,
    transactions,
    swap,
    mint,
    burn,
    multicall,
    lists,
    lottery,
    limit,
  },
  middleware: [
    ...getDefaultMiddleware({ thunk: true }),
    save({ states: PERSISTED_KEYS }),
  ],
  preloadedState: load({ states: PERSISTED_KEYS }),
});

store.dispatch(updateVersion());

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 */
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch();

export default store;
