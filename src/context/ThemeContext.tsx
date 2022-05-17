import { createContext, ReactNode, useState } from "react";

type Theme = "dark" | "light";

const DEFAULT_THEME: Theme = "dark";

export const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: DEFAULT_THEME,
  toggleTheme: () => ({}),
});

type Props = {
  children: ReactNode;
};

export default function ThemeContextProvider(props: Props) {
  const [theme, setTheme] = useState(DEFAULT_THEME);
  const toggleTheme = () => {
    setTheme((value) => (value === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
