import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function PokemonDetails() {
    const { name } = useParams(); //
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((res) => res.json())
            .then((data) => setPokemon(data));
    }, [name]);

    if (!pokemon) return <p>Loading...</p>;

    return (
        <div className="details-container">
            <h1 className="pokemon-name">{pokemon.name}</h1>

            <img
                className="pokemon-image"
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
            />

            {/* TYPES */}
            <div className="section">
                <h3>Types</h3>
                <div className="tags">
                    {pokemon.types.map((t) => (
                        <span key={t.type.name} className="tag">
                            {t.type.name}
                        </span>
                    ))}
                </div>
            </div>

            {/* ABILITIES */}
            <div className="section">
                <h3>Abilities</h3>
                <ul>
                    {pokemon.abilities.map((a) => (
                        <li key={a.ability.name}>{a.ability.name}</li>
                    ))}
                </ul>
            </div>

            {/* STATS */}
            <div className="section">
                <h3>Stats</h3>
                {pokemon.stats.map((s) => (
                    <div key={s.stat.name} className="stat">
                        <span>{s.stat.name}</span>
                        <div className="stat-bar">
                            <div
                                className="stat-fill"
                                style={{ width: `${s.base_stat}px` }}
                            ></div>
                        </div>
                        <span>{s.base_stat}</span>
                    </div>
                ))}
            </div>

            {/* EXTRA INFO */}
            <div className="section">
                <h3>Details</h3>
                <p><strong>Height:</strong> {pokemon.height}</p>
                <p><strong>Weight:</strong> {pokemon.weight}</p>
                <p><strong>Base experience:</strong> {pokemon.base_experience}</p>
            </div>
        </div>
    );
}

export default PokemonDetails;