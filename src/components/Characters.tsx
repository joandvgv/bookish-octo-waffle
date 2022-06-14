import withPropsValidator from "./WithPropsValidator";
import CharacterCard from "components/CharacterCard";

type Props = {
  characters: Array<any>;
};

function Characters(props: Props) {
  return (
    <div className="grid grid-cols-4 gap-6">
      {props.characters.map((character) => (
        <CharacterCard character={character} key={character.id} boldTitles />
      ))}
    </div>
  );
}

export default withPropsValidator(Characters, "characters");
