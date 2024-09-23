import { useState } from "react";
import PokemonAvatar from "../PokemonAvatar";

const pokemons = [
  {isGuessed: true,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: true,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: false,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: false,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: false,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: false,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: false,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: false,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: false,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: false,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: false,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: false,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: false,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: false,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: false,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: false,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: true,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: true,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: true,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: true,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: true,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: true,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: true,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: true,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: true,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: true,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: true,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: true,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: true,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: true,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: true,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: true,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: true,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: true,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: true,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: true,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},
  {isGuessed: true,image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', hp: 10, speed: 10, defense: 10, attack: 50, name: 'Jelly'},

];

export default function PokemonListComponent() {
  const firstGuessedIndex = pokemons.findIndex(pokemon => pokemon.isGuessed);
  const [selectedPokemon, setSelectedPokemon] = useState<number | null>(firstGuessedIndex !== -1 ? firstGuessedIndex : null)

  return (
    <div className="flex-1 grid lg:grid-cols-4 gap-4 overflow-auto h-full ">
      {pokemons.map((pokemon, index) => (
        <div
          key={pokemon.name}
          onClick={() => {pokemons[index].isGuessed && setSelectedPokemon(index)}}
        >
          <PokemonAvatar avatar={pokemon.image} isActive={index != null && index === selectedPokemon} isGuessed={pokemon.isGuessed} />
        </div>
      ))}
    </div>
  );
}
