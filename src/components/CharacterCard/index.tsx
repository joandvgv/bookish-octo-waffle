import Typography from "components/Typography";
import Pill from "components/Pill";
import clsx from "clsx";
import { Theme } from "context/ThemeContext";
import withTheme from "components/withTheme";
import { useStyles } from "./styles";
import ProgressBar from "components/ProgressBar";

type Props = {
  character: Record<string, any>;
  invertedTheme?: Theme;
  boldTitles?: boolean;
};

function CharacterCard({ character, invertedTheme, boldTitles }: Props) {
  const styles = useStyles({ boldTitles });

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
      <ProgressBar progress={10} color="#55b4b0" />
      <div>
        <Typography.H1 inverted>
          <span className={styles.nosotrsDefinimosEsteNombre}>Nombre:</span>
          {character.name}
        </Typography.H1>
        <Typography.Body inverted>
          Estado: <Pill>{character.status}</Pill>
        </Typography.Body>
      </div>
    </div>
  );
}

export default withTheme(CharacterCard, { background: true });
