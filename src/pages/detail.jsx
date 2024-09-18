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
    <div className="">
      {loading ? (
        <div>Welcome Pokemon world! {id}</div>
      ) : (
        <div className=" ">
          <div className="text-5xl  flex justify-center mb-3">
            <h1 className=""> {pokemon.name}</h1> &nbsp;
            <p className=" text-4xl text-gray-700 mt-2"> #{id}</p>
            </div>
            
          <div className=" flex justify-center">
            <div className="bg-slate-100 rounded-lg mr-5">
              <img
                className="object-contain w-[500px] h-[500px]"
                src={pokemon.sprites?.front_default}
                alt={pokemon.name}
              />
            </div>

            <div className="bg-[#30A7D7] w-[300px] rounded-lg  p-5 leading-10 text-gray-50 text-lg ">
              <span>back</span>
              <img
                className="bg-gray-200 rounded-full w-[150px] relative left-14 -top-5"
                src={pokemon.sprites?.back_default}
                alt={pokemon.name}
              />
              <div>
                <span className="">Height</span> &ensp;
                <span className="text-black text-xl ">{pokemon.height}</span>
              </div>
              <div>
                <span className="text-gray-50">Weight </span> &ensp;
                <span className="text-xl text-black">{pokemon.weight}</span>
              </div>
              <ul>
                <span className=""> type </span>
                {pokemon.types?.map((t, i) => (
                  <li className="text-xl text-black leading-relaxed" key={i}>
                    &ensp; {t.type.name}
                  </li>
                ))}
              </ul>
              <ul>
                <span className="">ability </span>
                {pokemon.abilities?.map((a, i) => (
                  <li className="text-xl text-black leading-relaxed" key={i}>
                    &ensp;{a.ability.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
