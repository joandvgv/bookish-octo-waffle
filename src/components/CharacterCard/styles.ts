import { ComponentProps } from "react";
import CharacterCard from ".";

type StyleProps = Partial<ComponentProps<typeof CharacterCard>>;

export const useStyles = (props: StyleProps) => ({
  nosotrsDefinimosEsteNombre: props.boldTitles ? "font-bold" : "",
});
