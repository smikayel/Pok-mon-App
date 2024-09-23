import { Dispatch, SetStateAction, useState } from "react";
import PokemonAvatar from "../PokemonAvatar";
import { IPokemon } from "../shared/types";

interface IProps {
  pokemons: IPokemon[],
  setSelectedPokemon: Dispatch<SetStateAction<number | null>>,
  selectedPokemon: number | null
}

export default function PokemonListComponent({pokemons, selectedPokemon, setSelectedPokemon}: IProps) {

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
