import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";

function Pokedex() {
    // State to store Pokémon list (updates UI when changed)
    const [pokemon, setPokemon] = useState([]);
    const [page, setPage] = useState(0); // Track current page

    useEffect(() => {
        // Fetch Pokémon data from API when page loads
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page * 20}`)
            .then((res) => res.json()) // convert response to JSON
            .then((data) => { setPokemon(data.results); }); // save Pokémon list into state
    }, [page]); // [page] = runswhen page changes

    return (
        <div className="container">

            {/* Loop through Pokémon and display each name */}
            <div className="grid">
                {pokemon.map((p) => (
                    <PokemonCard key={p.name} name={p.name} url={p.url} /> // key = unique id for React
                ))}
            </div>


            {/* Pagination buttons */}
            <div className="pagination">
                <button onClick={() => setPage(page - 1)} disabled={page === 0}>
                    Previous
                </button>

                <button onClick={() => setPage(page + 1)}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Pokedex; // allow this component to be used in other files