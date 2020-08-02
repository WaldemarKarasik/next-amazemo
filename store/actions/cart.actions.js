export const clientRemoveFromCart = (id) => (dispatch) => {
  dispatch({ type: "CLIENT_REMOVE_FROM_CART", payload: id });
};
