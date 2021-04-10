import { useSelector } from "react-redux";
import Button from "./components/Button";
import DisplayCounter from "./components/DisplayCounter";
import Info from "./components/Info";
import Theme from "./components/Theme";
import Title from "./components/Title";

const App = () => {
  const theme = useSelector((state) => state.themeReducer.darkMode);
  return (
    <main className={theme ? "dark" : ""}>
      <div className="relative h-screen bg-gray-100 dark:bg-gray-800">
        <Theme />
        <div className="flex h-screen">
          <div className="m-auto">
            <div className="flex flex-col gap-y-6">
              <Title />
              <DisplayCounter />
            </div>
            <div className="flex mt-6 gap-x-10 md:gap-x-16 xl:gap-x-24">
              <Button type="add" />
              <div className="mt-12">
                <Button type="reset" />
              </div>
              <Button type="minus" />
            </div>
            <Info />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
