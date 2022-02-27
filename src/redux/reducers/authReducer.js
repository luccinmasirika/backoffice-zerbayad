import { LOGIN, IS_AUTH, LOGOUT, STATUS_CHANGE } from "../types/authType";
import Cookies from "js-cookie";

const user = Cookies.get("user") || null;
const serialisedUser = JSON.parse(user);

const initialState = {
  user: serialisedUser,
  isAuth: user ? true : false,
  status: { error: false, loading: false },
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, user: payload, isAuth: true };
    case IS_AUTH:
      return { ...state, isAuth: payload };
    case LOGOUT:
      return { ...state, isAuth: false, user: null };
    case STATUS_CHANGE:
      return { ...state, status: payload };
    default:
      return state;
  }
};
