const increment = "INCREMENT",
  decrement = "DECREMENT",
  reset = "RESET",
  theme = "THEME";

export const incrementCount = () => ({ type: increment });
export const decrementCount = () => ({ type: decrement });
export const resetCount = () => ({ type: reset });
export const changeTheme = () => ({ type: theme });
