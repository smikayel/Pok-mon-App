import Image from "next/image";
import { useState } from "react";
import { trpc } from "@/server/client";
import Button from "../Button";
import Input from "../Input";

import ImageIcon from "../../app/Assets/ArrowRight.svg";

export default function GuessCard() {
  const [inputValue, setInputValue] = useState<string>('')

  const { data } = trpc.pokemons.getRandomNotGuessedPokemon.useQuery();

  const handleGuessing = () => {
    if (inputValue === data?.pokemon.name) {
      // handle mutation for guessing
    } else {
      // not guessed
    }
  }

  return (
    <div className="shadow-primary_shadow flex flex-[1] flex-col items-center justify-between h-full w-full rounded-md p-[100px]">
      <img
        src={data?.pokemon.image}
        alt="pokemon"
        width={300}
        height={300}
      />
      <Input value={inputValue} onValueChange={(changedString) => setInputValue(changedString)}/>
      <Button
        label="GUESS"
        onClick={() => {
          handleGuessing()
        }}
        icon={<Image src={ImageIcon} alt="->" height={24} width={24} />}
      />
    </div>
  );
}
