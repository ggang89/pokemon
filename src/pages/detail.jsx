import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Datail() {
  let { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    setLoading(true);
    const getPokemon = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      const json = await response.json();
      console.log(json);
      setPokemon(json);
      setLoading(false);
    };
    getPokemon();
  }, [id]);
  return (
    <>
      {loading ? (
        <div>Welcome Pokemon world! {id}</div>
      ) : (
        <div className="bg-slate-400">
          <h1 className="text-xl">
            {pokemon.name} <p className="text-lg text-gray-600"> #{id}</p>
          </h1>
          <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
          <img src={pokemon.sprites?.back_default} alt={pokemon.name} />
          <ul>
            type :
            {pokemon.types?.map((t, i) => (
              <li key={i}>{t.type.name}</li>
            ))}
          </ul>
          <ul>
            ability :{" "}
            {pokemon.abilities?.map((a, i) => (
              <li key={i}>{a.ability.name} </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
