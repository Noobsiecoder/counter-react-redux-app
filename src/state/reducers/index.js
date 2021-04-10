import { combineReducers } from "redux";

const initialState = {
  count: 1,
  darkMode: false,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 1 };
    default:
      return state;
  }
}

function themeReducer(state = initialState, action) {
  switch (action.type) {
    case "THEME":
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
}

const rootReducers = combineReducers({
  counterReducer: counterReducer,
  themeReducer: themeReducer,
});

export default rootReducers;
