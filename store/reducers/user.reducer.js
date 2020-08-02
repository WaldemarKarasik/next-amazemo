import { HYDRATE } from "next-redux-wrapper";

export const userReducer = (state = { facebookUser: {} }, action) => {
  switch (action.type) {
    case HYDRATE: {
      return {
        ...state,
        server: {
          ...state.server,
          ...action.payload.user,
        },
      };
    }
    case "CLIENT_FACEBOOK_LOGIN": {
      return {
        ...state,
        facebookUser: action.payload,
      };
    }
    default:
      return state;
  }
};
