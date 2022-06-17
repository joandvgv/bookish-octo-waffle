import styled from "styled-components";
const WIDTH_BASE = 12;

type Props = {
  color: string;
  progress: number;
};

const BarContainer = styled.div`
  width: 100%;
  height: 0.375rem;
  background-color: ${(props) => props.color + "4D"};
`;

const FillBar = styled.div<{
  progress: Props["progress"];
}>`
  background-color: ${(props) => props.color};
  height: 0.375rem;
  width: ${(props) => `${(props.progress / WIDTH_BASE) * 100}%`};
`;

export default function ProgressBar(props: Props) {
  return (
    <BarContainer color={props.color}>
      <FillBar color={props.color} progress={props.progress} />
    </BarContainer>
  );
}
