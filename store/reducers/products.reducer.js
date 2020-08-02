import { HYDRATE } from "next-redux-wrapper";
const jsondiffpatch = require("jsondiffpatch").create();

export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case HYDRATE:
      // const nextState = {
      //   ...state, // use previous state
      //   ...action.payload, // apply delta from hydration
      // };
      // if (state.products) nextState.products = state.products; // preserve count value on client side navigation
      // return nextState;
      // const stateDiff = jsondiffpatch.diff(
      //   state,
      //   action.payload.productsList.products
      // );
      // console.log(stateDiff);
      // const wasBumpedOnClient = stateDiff.products[]; // or any other criteria
      // return { ...state, ...action.payload };
      // case "PRODUCTS_LOADED":
      //   return {
      //     ...state,
      //     products: action.payload,
      //   };
      return {
        ...state,
        server: {
          ...state.server,
          ...action.payload.productsList,
        },
      };
    case "CLIENT_PRODUCTS_LOADED": {
      return {
        // ...state,
        // products: action.payload,
        ...state,
        products: action.payload,
      };
    }
    default:
      return state;
  }
};
