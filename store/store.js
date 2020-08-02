import { MakeStore, createWrapper } from "next-redux-wrapper";
import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./reducers/root.reducer";
import thunk from "redux-thunk";
import Cookie from "js-cookie";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// export const makeStore = (context) =>
//   createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

// export const wrapper = createWrapper(makeStore, { debug: false });

const SET_CLIENT_STATE = "SET_CLIENT_STATE";

const cartItems = Cookie.getJSON("cartItems") || [];
const initialState = { cart: { cartItems } };

const makeConfiguredStore = (rootReducer) =>
  createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );

const makeStore = () => {
  const isServer = typeof window === "undefined";

  if (isServer) {
    return makeConfiguredStore(rootReducer);
  } else {
    // we need it only on client side
    const { persistStore, persistReducer } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;

    const persistConfig = {
      key: "nextjs",
      whitelist: ["fromClient"], // make sure it does not clash with server keys
      storage,
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store = makeConfiguredStore(persistedReducer);

    store.__persistor = persistStore(store); // Nasty hack

    return store;
  }
};

export const wrapper = createWrapper(makeStore);
