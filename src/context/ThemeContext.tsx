import { createContext, ReactNode, useState } from "react";

const DEFAULT_THEME_COLOR = "dark";

export type ThemeColors = "dark" | "light";

export const ThemeContext = createContext({
  theme: DEFAULT_THEME_COLOR as ThemeColors,
  setTheme: (_: ThemeColors) => {},
});

type Props = {
  children: ReactNode;
};

export default function ThemeContextProvider({ children }: Props) {
  const [theme, setTheme] = useState<ThemeColors>(DEFAULT_THEME_COLOR);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
