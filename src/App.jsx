import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [loading, setLoading] = useState(false);
  //[{ name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/", imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png" }, ....];
  const [pokeMon, setPokeMon] = useState([]);

  // function fetchPokemonData(pokemon) {
  //   let url = pokemon.url;
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then(function (pokeData) {
  //       console.log("pokeData", pokeData);
  //       setPokeMon(pokeData.forms);
  //       setLoading(false);
  //     });
  // }

  useEffect(() => {
    const getPokemon = async () => {
      setLoading(true);
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const toJson = await response.json();
      const newArr = toJson.results.map((v, i) => ({
        id: i + 1,
        name: v.name,
        url: `https://pokeapi.co/api/v2/pokemon/${i + 1}/`,
        imgSrc: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          i + 1
        }.png`,
      }));

      //
      setPokeMon(newArr);
      setLoading(false);
    };
    getPokemon();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <>
          {pokeMon.map((p) => (
            <Link to={`/detail/${p.id}`} key={p.id}>
              <div>
                <h1>{p.name}</h1>
                <img src={p.imgSrc} alt={p.name} />
              </div>
            </Link>
          ))}
        </>
      )}
    </>
  );
}

export default Home;
