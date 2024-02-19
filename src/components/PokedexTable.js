import PokemonRow from "./PokemonRow";
function PokedexTable({ pokemon, selectedType }) {
    const filteredPokemon = pokemon.filter((p) => !selectedType || p.types.includes(selectedType)).map((p) => {
        return (
            <PokemonRow pokemon={p} key={p.id} />
        );
    });
    return (
        <div>
            {filteredPokemon}
        </div>
    );
}

export default PokedexTable;