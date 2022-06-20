import withTheme from "components/withTheme";

import { ReactNode } from "react";
import styled from "styled-components";

const PillContainer = styled.span<{
  theme: string;
}>`
  display: inline-block;
  border-radius: 9999px;
  background: #8b5cf6;
  padding: 0.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
  margin-right: 0.75rem;
  font-weight: bold;

  color: ${(props) => props.theme};
  /* ${(props) => props.theme} */
`;

type Props = {
  children: ReactNode;
  // cssTheme?: FlattenSimpleInterpolation;}
  cssTheme?: string;
};

function Pill(props: Props) {
  return <PillContainer theme={props.cssTheme}>{props.children}</PillContainer>;
}

export default withTheme(Pill);
