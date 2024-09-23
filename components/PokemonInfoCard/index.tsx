import { IPokemon } from "../shared/types";

const infos = ["hp", "speed", "defense", "attack"];

export interface IProps {
  pokemon: IPokemon
}

export default function PokemonInfoCard({ pokemon }: IProps) {
  return (
    <div className="flex flex-[1] flex-col items-center justify-between h-full w-full rounded-md p-[100px]">
      <img
        src={pokemon.image}
        alt="pokemon"
        width={300}
        height={300}
      />
      <div className="flex gap-2">
        <div className="font-inter text-2xl font-bold leading-[30px] text-left text-black">
          {pokemon.name}
        </div>
        <div className="font-inter text-2xl font-semibold leading-[30px] text-left text-black opacity-[0.5]">
          (# {pokemon.id})
        </div>
      </div>
      {infos.map((info) => {
        return (
          <div key={pokemon.name} className="w-[50%]">
            <div className="flex justify-between text-black font-inter text-xl">
              <div>{info.toUpperCase()}</div>
              <div>{pokemon[info as keyof typeof pokemon]}</div>
            </div>
            <hr className="mt-[10px]"/>
          </div>
        );
      })}
    </div>
  );
}
