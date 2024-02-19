function PokemonTypeSelection({ selectType }) {
    const handleChange = (e) => {
        selectType(e.target.value);
    }
    return (
        <div>
            Grass <input type="radio" onChange={handleChange} value="grass" name="pokemon-type-selector" />
            Fire <input type="radio" onChange={handleChange} value="fire" name="pokemon-type-selector" />
        </div>
    );
}

export default PokemonTypeSelection;