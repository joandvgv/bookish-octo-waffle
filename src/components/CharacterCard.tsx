import Typography from "components/Typography";
import Pill from "components/Pill";
import clsx from "clsx";
import { Theme } from "context/ThemeContext";
import withTheme from "components/withTheme";

type Props = {
  character: Record<string, any>;
  invertedTheme?: Theme;
};

function CharacterCard({ character, invertedTheme }: Props) {
  return (
    <div
      className={clsx(
        "shadow-md",
        "border",
        "border-gray-200",
        "rounded-lg",
        "p-4",
        "sm:p-6",
        "lg:p-8",
        invertedTheme
      )}
    >
      <div>
        <Typography.H1 inverted>Nombre: {character.name}</Typography.H1>
        <Typography.Body inverted>
          Estado: <Pill>{character.status}</Pill>
        </Typography.Body>
      </div>
    </div>
  );
}

export default withTheme(CharacterCard, { background: true });
