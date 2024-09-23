"use client";
import Image from "next/image";
import { useState } from "react";
import { trpc } from "@/server/client";
import Button from "../Button";
import Input from "../Input";

import ArrowIco from "../../app/Assets/ArrowRight.svg";
import GuessedIco from "../../app/Assets/GuessedIco.svg";
import FailedIco from "../../app/Assets/FailedIco.svg";

import styles from "./index.module.scss";

export default function GuessCard() {
  const [inputValue, setInputValue] = useState<string>("");
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isGuessed, setIsGuessed] = useState<boolean>(false);
  const { data } = trpc.pokemons.getRandomNotGuessedPokemon.useQuery();

  const mutation = trpc.pokemons.guessPokemon.useMutation({
    onSuccess: () => {
      console.log("Guess updated successfully!");
      setIsGuessed(true);
    },
    onError: () => {
      console.error("Error updating guess");
      setIsGuessed(false);
    },
  });

  const handleGuessing = () => {
    if (!inputValue) return;
    console.log(data?.pokemon.name);
    if (inputValue === data?.pokemon.name) {
      mutation.mutate({ id: data.pokemon.id });
      setIsGuessed(true);
    } else {
      setIsGuessed(false);
    }
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1000);
  };

  return (
    <div
      className={`${styles.card} ${
        isClicked ? styles.clicked : ""
      } shadow-primary_shadow flex flex-[1] flex-col items-center justify-between h-full w-full rounded-md p-[100px]`}
    >
      <img
        src={data?.pokemon.image}
        alt="pokemon"
        className={`z-10 ${styles.image} ${isClicked ? styles.clicked : ""}`}
        width={300}
        height={300}
      />
      {isClicked ? (
        <Image
          className={`${styles.button} ${isClicked ? styles.clicked : ""}`}
          src={isGuessed ? GuessedIco : FailedIco}
          alt="info"
          height={50}
          width={50}
        />
      ) : (
        <Input
          value={inputValue}
          onValueChange={(changedString) => setInputValue(changedString)}
        />
      )}
      {isClicked ? (
        <div
          className={
            "font-inter text-2xl font-bold leading-[30px] text-left text-black" +
            ` ${styles.button} ${isClicked ? styles.clicked : ""}`
          }
        >
          {inputValue}
        </div>
      ) : (
        <Button
          label="GUESS"
          onClick={handleGuessing}
          icon={<Image src={ArrowIco} alt="->" height={24} width={24} />}
          className={`${styles.button} ${isClicked ? styles.clicked : ""}`}
        />
      )}
    </div>
  );
}
