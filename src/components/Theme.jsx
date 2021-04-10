import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../state/action";

import MoonIcon from "./Icon/MoonIcon";
import SunIcon from "./Icon/SunIcon";

function handleButtonClick(e, dispatch) {
  e.preventDefault();
  dispatch(changeTheme());
}

const Theme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themeReducer.darkMode);
  return (
    <div className="absolute right-6 top-6">
      <button
        onClick={(e) => handleButtonClick(e, dispatch)}
        className="p-2 px-4 bg-white rounded-full focus:outline-none dark:bg-gray-900"
      >
        <div className="flex items-center gap-x-4">
          <span className="hidden text-sm font-light sm:block font-google-poppins dark:text-gray-50">
            {!theme ? "Enable" : "Disable"} Dark Mode
          </span>
          {theme ? <SunIcon /> : <MoonIcon />}
        </div>
      </button>
    </div>
  );
};

export default Theme;
