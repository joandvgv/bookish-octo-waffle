type Props = {
  character: Record<string, any>;
};
export default function CharacterCard({ character }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Nombre: {character.name}</h1>
      <p>Estado: {character.status}</p>
    </div>
  );
}
