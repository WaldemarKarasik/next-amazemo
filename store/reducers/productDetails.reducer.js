import { HYDRATE } from "next-redux-wrapper";
export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return {
        ...state,
        server: {
          ...state.server,
          ...action.payload.productDetails,
        },
      };
    case "SERVER_PRODUCT_LOADED":
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};
