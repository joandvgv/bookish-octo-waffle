import { Theme, ThemeContext } from "context/ThemeContext";
import React, { ReactNode, useContext } from "react";

type Props = {
  children?: ReactNode;
  theme?: Theme;
  className?: string;
};

type Options = {
  background?: boolean;
};

export default function withTheme<T extends Props>(
  Component: React.ComponentType<T>,
  options: Options = {
    background: false,
  }
) {
  return function (props: T) {
    const { theme, invertedTheme } = useContext(ThemeContext);

    const classMap: any = {
      dark: options.background ? "bg-white" : "text-slate-800",
      light: options.background ? "bg-slate-800" : "text-white",
    };

    return (
      <Component
        {...props}
        themeClassName={classMap[theme]}
        invertedTheme={classMap[invertedTheme]}
      />
    );
  };
}
