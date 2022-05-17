import Header from "components/Header";
import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";
import "./App.css";
import clsx from "clsx";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={clsx("App", theme === "dark" && "bg-slate-800")}>
      <Header />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default App;
