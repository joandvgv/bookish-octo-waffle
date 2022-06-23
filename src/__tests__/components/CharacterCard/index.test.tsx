import { render, screen } from "@testing-library/react";
import { randFullName, randStatus } from "@ngneat/falso";
import CharacterCard from "components/CharacterCard";
import "@testing-library/jest-dom";

describe("CharacterCard", () => {
  type Character = { name: string; status: string };
  let character: Character = {} as Character;

  beforeAll(() => {
    character = {
      name: randFullName(),
      status: randStatus(),
    };
    render(<CharacterCard character={character} />);
  });

  it("should display character name with default theme|", () => {
    const headerTag = screen.getByText(character.name);
    expect(headerTag).toBeInTheDocument();
    expect(headerTag.classList.contains("text-slate-800")).toBe(true);
  });
});
