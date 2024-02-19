function PokemonRow({pokemon}) {
    const { id, name, types, sprite } = pokemon;
    const renderedTypes = types.map((type, index) => {
        return <li key={index}>{type}</li>;
    });
    return (
        <div className="pokemon-card">
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Types:</p>
            <ul>
                {renderedTypes}
            </ul>
            <img src={sprite} alt="pokemon" />
        </div>
    );
}

export default PokemonRow;