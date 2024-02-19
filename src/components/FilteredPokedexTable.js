import PokedexTable from "./PokedexTable";
import PokemonTypeSelection from "./PokemonTypeSelection";
function FilteredPokedexTable({ pokemon, selectType, selectedType }) {
    return (
        <div>
            <PokemonTypeSelection selectType={selectType} />
            <PokedexTable pokemon={pokemon} selectedType={selectedType} />
        </div>
    );
}

export default FilteredPokedexTable;