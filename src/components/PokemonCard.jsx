import { Link } from "react-router-dom";

function PokemonCard({ name, url }) {
    const id = url.split("/").filter(Boolean).pop();

     // Random colors for cards
    const colors = [
        "#78c850", // green
        "#f08030", // orange
        "#6890f0", // blue
        "#f8d030", // yellow
        "#a040a0", // purple
    ];

    // Picking random colors
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return (
        <Link to={`/pokemon/${name}`} style={{ textDecoration: "none" }}>
            <div className="card" style={{ backgroundColor: randomColor }}>
                <div>
                    <p>#{id}</p>
                    <h2>{name}</h2>
                </div>

                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                    alt={name}
                />
            </div>
        </Link>
    );
}

export default PokemonCard;