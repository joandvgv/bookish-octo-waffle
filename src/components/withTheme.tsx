import { ThemeContext } from "context/ThemeContext";
import React, { useContext } from "react";
import { css } from "styled-components";

type Options = {
  background?: boolean;
};

export default function withTheme<T extends Record<string, unknown>>(
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

    const cssMap = {
      dark: options.background ? "white" : "dark",
      light: options.background ? "dark" : "white",
    };

    // const cssMap = {
    //   dark: options.background
    //     ? css`
    //         background-color: white;
    //       `
    //     : css`
    //         color: black;
    //       `,
    //   light: options.background
    //     ? css`
    //         background-color: black;
    //       `
    //     : css`
    //         color: white;
    //       `,
    // };

    return (
      <Component
        {...props}
        themeClassName={classMap[theme]}
        invertedTheme={classMap[invertedTheme]}
        cssTheme={cssMap[theme]}
      />
    );
  };
}
