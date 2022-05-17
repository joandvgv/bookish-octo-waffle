import logo from "images/logo.svg";
import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "context/ThemeContext";
import clsx from "clsx";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={clsx("App", theme === "dark" && "bg-slate-800")}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        Cambiar Tema
      </button>
    </div>
  );
}

export default App;
