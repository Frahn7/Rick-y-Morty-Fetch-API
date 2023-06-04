export function Character({ character }) {
  return (
    <div className="text-center p-5">
      <h3>{character.name}</h3>
      <img className='img-fluid rounded-pill' src={character.image} alt={character.name}></img>
      <h4>{character.origin.name}</h4>
    </div>
  );
}
