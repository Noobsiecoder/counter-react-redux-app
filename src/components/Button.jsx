import { useSelector, useDispatch } from "react-redux";
import { incrementCount, decrementCount, resetCount } from "../state/action";

const buttonType = {
  add: {
    color: "green",
  },
  reset: {
    color: "gray",
  },
  minus: {
    color: "red",
  },
};

function handleButtonClick(e, type, dispatch) {
  e.preventDefault();
  switch (type) {
    case "add":
      dispatch(incrementCount());
      break;
    case "minus":
      dispatch(decrementCount());
      break;
    case "reset":
      dispatch(resetCount());
      break;
    default:
      return null;
  }
}

function handleButtonState(type, counter) {
  if (type === "minus") {
    if (counter <= 0) return true;
    // Disable button
    else return false;
  } else {
    return false;
  }
}

const Button = ({ type }) => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterReducer.count);
  return (
    <button
      onClick={(e) => handleButtonClick(e, type, dispatch)}
      className={`w-16 h-16 ${
        !handleButtonState(type, counter)
          ? `opacity-100 focus:ring-${buttonType[type].color}-200`
          : "opacity-30 cursor-default"
      } bg-${buttonType[type].color}-500 dark:bg-${
        buttonType[type].color
      }-400 focus:outline-none transition duration-200 ease-in-out hover:shadow-lg focus:ring-4 rounded-full`}
      disabled={handleButtonState(type, counter)}
    >
      <span className="font-medium text-white capitalize dark:text-white font-google-poppins">
        {type}
      </span>
    </button>
  );
};

export default Button;
