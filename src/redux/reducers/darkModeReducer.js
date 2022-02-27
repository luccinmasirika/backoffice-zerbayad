import { DARK_MODE } from "../types/darkModeType";

const getInitialStateMode = () => {
  const serialisedState = localStorage.getItem("themeMode");
  if (serialisedState === null) return "light";
  return serialisedState
};

const initialState = {
  mode: getInitialStateMode()
};

export const darkModeReducer = (state = initialState, action) => {
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
