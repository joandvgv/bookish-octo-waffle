import { createContext, ReactNode, useState } from "react";

export type Theme = "dark" | "light";

const DEFAULT_THEME: Theme = "dark";

export const ThemeContext = createContext<{
  theme: Theme;
  invertedTheme: Theme;
  toggleTheme: () => void;
}>({
  theme: DEFAULT_THEME,
  toggleTheme: () => ({}),
  invertedTheme: DEFAULT_THEME,
});

type Props = {
  children: ReactNode;
};

export default function ThemeContextProvider(props: Props) {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  const invertTheme = (value: Theme) => (value === "dark" ? "light" : "dark");
  const invertedTheme = invertTheme(theme);

  const toggleTheme = () => {
    setTheme(invertTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, invertedTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
