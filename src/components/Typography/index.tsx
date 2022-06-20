import withTheme from "components/withTheme";
import { Theme } from "context/ThemeContext";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  theme?: Theme;
  invertedTheme?: Theme;
  inverted?: boolean;
};

const H1 = withTheme((props: Props) => (
  <h1 className={props.inverted ? props.invertedTheme : props.theme}>
    {props.children}
  </h1>
));
const H2 = withTheme((props: Props) => (
  <h2 className={props.inverted ? props.invertedTheme : props.theme}>
    {props.children}
  </h2>
));
const Body = withTheme((props: Props) => (
  <p className={props.inverted ? props.invertedTheme : props.theme}>
    {props.children}
  </p>
));

const Typography = {
  H1,
  H2,
  Body,
};

export default Typography;
