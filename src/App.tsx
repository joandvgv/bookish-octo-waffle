import { useContext, useEffect, useState } from "react";
import { Theme, ThemeContext } from "context/ThemeContext";
import "./App.css";
import clsx from "clsx";
import { getCharacters } from "./api/getCharacters";
import Characters from "components/Characters";
import withTheme from "components/withTheme";

type Props = {
  theme?: Theme;
};

function App(props: Props) {
  const { toggleTheme } = useContext(ThemeContext);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((value) => {
      setCharacters(value);
    });
  }, []);

  return (
    <div className={clsx("App", "min-h-screen", props.theme)}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Characters characters={characters} />
      {/* <Characters characters={characters} /> */}
    </div>
  );
}

export default withTheme(App, { background: true });
