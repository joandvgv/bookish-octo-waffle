import clsx from "clsx";
import withTheme from "components/withTheme";
import { Theme } from "context/ThemeContext";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  theme?: Theme;
};

function Pill(props: Props) {
  return (
    <span
      className={clsx(
        "inline-block",
        "rounded-full",
        "bg-purple-500",
        "px-2",
        "py-1",
        "text-xs",
        "font-bold",
        "mr-3",
        props.theme
      )}
    >
      {props.children}
    </span>
  );
}

export default withTheme(Pill);
