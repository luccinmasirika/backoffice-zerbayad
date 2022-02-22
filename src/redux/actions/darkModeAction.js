import { DARK_MODE } from "../types/darkModeType";

export const handledarkMode = (e) => async (dispatch) => {
  console.log("e", e)
  localStorage.setItem("themeMode", e);

  dispatch({
    type: DARK_MODE,
    payload: e,
  });
};