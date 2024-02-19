import { useState } from 'react';
import FilteredPokedexTable from './components/FilteredPokedexTable';
const pokemon = [
  {
    id: 1,
    name: "Bulbasaur",
    types: ["grass"],
    sprite: "https://pokemon.com/pictures/bulbasaur.png"
  }, {
    id: 2,
    name: "Charizard",
    types: ["fire"],
    sprite: "https://pokemon.com/pictures/charizard.png"
  }
];

function App() {
  const [selectedType, setSelectedType] = useState('');
  return (
    <div className="app">
      <FilteredPokedexTable pokemon={pokemon} selectedType={selectedType} selectType={setSelectedType} />
    </div>
  );
}

export default App;
