import { combineReducers } from "redux";
import { productsReducer } from "./products.reducer";
import { productDetailsReducer } from "./productDetails.reducer";
import cartReducer from "./cart.reducer";
import { userReducer } from "./user.reducer";
export const rootReducer = combineReducers({
  productsList: productsReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  user: userReducer,
});
