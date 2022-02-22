import { DARK_MODE } from "../types/darkModeType";

const initialState = {
  mode: "dark",
  // mode: JSON.parse(localStorage.getItem("themeMode")),
};

export const darkModeReducer = (state = initialState, action) => {
  console.log(action.payload)
  switch (action.type) {
    case DARK_MODE:
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
};
