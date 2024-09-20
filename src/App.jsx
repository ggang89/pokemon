import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [loading, setLoading] = useState(false);
  //[{ name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/", imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png" }, ....];
  const [pokeMon, setPokeMon] = useState([]);

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

      setPokeMon(newArr);
      setLoading(false);
    };
    getPokemon();
  }, []);

  return (
    <div className=" bg-black">
      {loading ? (
        <div className="h-screen grid place-items-center">
          <h1 className=" text-4xl text-bold text-center  text-white">
            ...🐧...Loading....
          </h1>
        </div>
      ) : (
        <>
          <h1 className="text-amber-400 font-bold text-5xl p-3 font-bangers">
            Pokemon
          </h1>
          <div className="grid grid-cols-4 gap-4 place-items-center">
            {pokeMon.map((p) => (
              <div
                key={p.id}
                className="w-[300px] h-[400px]  bg-white mb-10 p-5 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <div>
                  <Link to={`/detail/${p.id}`}>
                    <img
                      className="bg-[#ecebeb] object-contain w-80"
                      src={p.imgSrc}
                      alt={p.name}
                    />
                  </Link>
                  <p className="italic text-gray-600 "># {p.id}</p>
                  <h1 className="font-bangers text-3xl pt-3 pl-3 font-semibold text-center hover:text-[#30A7D7]">
                    <Link to={`/detail/${p.id}`}>{p.name}</Link>
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
