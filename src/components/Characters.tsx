import withPropsValidator from "./WithPropsValidator";
import CharacterCard from "./CharacterCard";

type Props = {
  characters: Array<any>;
};

function Characters(props: Props) {
  return (
    <div>
      {props.characters.map((character) => (
        <CharacterCard character={character} key={character.id} />
      ))}
    </div>
  );
}

export default withPropsValidator(Characters, "characters");
