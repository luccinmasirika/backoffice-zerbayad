import { DARK_MODE } from "../types/darkModeType";

export const handledarkMode = (e) => async (dispatch) => {
  localStorage.setItem("themeMode", e);
  dispatch({
    type: DARK_MODE,
    payload: e,
  });
};
