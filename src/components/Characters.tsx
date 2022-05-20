import withPropsValidator from "./WithPropsValidator";
import CharacterCard from "./CharacterCard";

type Props = {
  characters: Array<any>;
};

function Characters(props: Props) {
  return props.characters.map((character) => (
    <CharacterCard character={character} key={character.id} />
  ));
}

export default withPropsValidator(Characters, "characters");
