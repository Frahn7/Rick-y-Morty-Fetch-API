import { Character } from "./components/Character";
import { CharacterList } from "./components/CharacterList";

function HelloWord() {
  return (
    <div className="bg-black text-white">
      <h1 className="text-center display-1 py-4">Rick and Morty rest api</h1>
      <CharacterList />
    </div>
  );
}

export default HelloWord;
