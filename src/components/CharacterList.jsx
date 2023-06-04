import { useEffect, useState } from "react";
import { Character } from "./Character";

function NavPage(props) {
  return (
    <header className="d-flex justify-content-between align-items-center  ">
      <button onClick={()=>props.setPage(props.page > 1 ? props.page - 1 : props.page)
    }>Page:{props.page}</button>
      <button 
        className="btn btn-primary btn-sm"
        onClick={() => props.setPage(props.page + 1)}
      >
        {" "}
        Page:{props.page + 1}
      </button>
    </header>
  );
}

export function CharacterList() {
  const [characters, setcharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setLoading(false);
      setcharacters(data.results);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />

      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div key={character.id} className="col-md-4">
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}

      <NavPage page={page} setPage={setPage} />
    </div>
  );
}
