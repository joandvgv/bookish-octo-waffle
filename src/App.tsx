import Header from "components/Header";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "context/ThemeContext";
import "./App.css";
import clsx from "clsx";
import { getCharacters } from "./api/getCharacters";
import Characters from "components/Characters";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((value) => {
      setCharacters(value);
    });
  }, []);

  return (
    <div className={clsx("App", theme === "dark" && "bg-slate-800")}>
      <Header />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Characters characters={characters} />
      {/* <Characters characters={characters} /> */}
    </div>
  );
}

export default App;
