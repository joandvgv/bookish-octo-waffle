
import { render, screen } from "@testing-library/react";
import { randFullName, randStatus } from '@ngneat/falso';
import CharacterCard from "components/CharacterCard";
import '@testing-library/jest-dom'

describe("CharacterCard", () => {

  const character = {
      name: randFullName(),
      status: randStatus()
    }
  render(<CharacterCard character={character} />)

  it("should display character name", () => {
    const headerTag = screen.getByText(character.name);
    expect(headerTag).toBeInTheDocument();

  })

})