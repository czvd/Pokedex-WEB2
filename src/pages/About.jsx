function About() {
    return (
        <div className="about-container">
            <h1>About this Pokedex</h1>

            <p className="intro">
                This Pokedex is a web application built using React. It allows users to browse Pokémon,
                view their details, and explore different pages using routing.
            </p>

            <section>
                <h2>Features</h2>
                <ul>
                    <li>Browse Pokémon with pagination</li>
                    <li>Click on a Pokémon to see detailed information</li>
                    <li>View stats, types, abilities, height, and weight</li>
                    <li>Modern UI with responsive design</li>
                </ul>
            </section>

            <section>
                <h2>Technologies Used</h2>
                <ul>
                    <li>React</li>
                    <li>React Router</li>
                    <li>PokeAPI</li>
                    <li>CSS Grid & Flexbox</li>
                </ul>
            </section>

            <section>
                <h2>About the Developer</h2>
                <p>
                    This project was created as part of a web development assignment to practice
                    React, API integration, and UI design.
                </p>
            </section>
        </div>
    );
}

export default About;