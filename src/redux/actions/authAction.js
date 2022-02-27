import Cookies from "js-cookie";
import { LOGIN, IS_AUTH, LOGOUT, STATUS_CHANGE } from "../types/authType";

export const onLogin = (e) => async (dispatch) => {
  Cookies.set("user", JSON.stringify(e), {
    expires: 7,
    secure: process.env.REACT_APP_NODE_ENV === "production",
  });
  dispatch({ type: LOGIN, payload: e });
};

export const authenticated = (e) => async (dispatch) => {
  dispatch({ type: IS_AUTH, payload: e });
};

export const onLogOut = () => (dispatch) => {
  Cookies.remove("user")
  dispatch({type: LOGOUT})
}

export const onStatusChange = (e) => (dispatch) => {
  dispatch({ type: STATUS_CHANGE, payload: e })
}