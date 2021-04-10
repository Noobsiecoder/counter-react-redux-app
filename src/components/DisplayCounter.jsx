import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((state) => state.counterReducer.count);
  return (
    <div className="flex justify-center">
      <div className="w-48 h-48 bg-white rounded-full shadow-lg dark:bg-gray-900 md:w-56 md:h-56 xl:w-64 xl:h-64">
        <div className="flex h-full">
          <div className="m-auto">
            <span className="font-extralight dark:text-gray-50 font-google-nunito text-9xl">
              {counter}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCounter;
