import { useContext, useEffect, useState } from "react";
import { Theme, ThemeContext } from "context/ThemeContext";
import "./App.css";
import clsx from "clsx";
import { getCharacters } from "./api/getCharacters";
import Characters from "components/Characters";
import withTheme from "components/withTheme";
import Typography from "components/Typography";
import { useApi } from "./hooks/useApi";

type Props = {
  themeClassName?: Theme;
};

function App(props: Props) {
  const { toggleTheme } = useContext(ThemeContext);

  const ENDPOINT = "https://rickandmortyapi.com/api/character";
  const { data: characters, loading, error } = useApi<Array<any>>(ENDPOINT);

  return (
    <div
      data-testid="container"
      className={clsx("App", "min-h-screen", props.themeClassName)}
    >
      <div className="min-h-screen">hola</div>

      <button onClick={toggleTheme}>Toggle Theme</button>
      {loading && <Typography.H1>Loading...</Typography.H1>}
      {error && <Typography.H1>Oh! Snap🤦‍♀️ La app se rompió 😜</Typography.H1>}
      <Characters characters={characters ?? []} />
      {/* <Characters characters={characters} /> */}
    </div>
  );
}

export default withTheme(App, { background: true });
