import { useContext } from "react";
import { trpc } from "@/server/client";
import Button from "../Button";
import { Modal } from "../Modal";
import ProgressBar from "../ProgressBar";
import { ModalContext } from "../Context/modal.context";
import { IProgress } from "../shared/types";

export default function Hero() {
  const { state, updateState } = useContext(ModalContext);
  const {data, isLoading} = trpc.pokemons.getProgress.useQuery();

  const handleOpenPokemonModal = () => {
    updateState(!state);
  };

  return (
    <div className="flex flex-col flex-[1] justify-between">
      <div>
        <h1 className="text-4xl leading-none tracking-tight text-gray-900">
          GUESS THAT
        </h1>
        <h1 className="text-4xl font-bold leading-none tracking-tight text-gray-900">
          POKEMON!
        </h1>
        <p className="mt-[40px] text-black max-w-[480px]">
          Are you a pokemon master? Do you want to be the very best?{" "}
          <span className="font-semibold">Find out in our quiz!</span>
        </p>
      </div>
      <div className="mt-[170px]">
        <Button
          label="MY POKEDEX"
          onClick={handleOpenPokemonModal}
          className="max-w-[235px]"
        />
        {!isLoading && (
          <ProgressBar
            current={data?.current}
            total={data?.total}
          />
        )}
      </div>
      {state && (
        <Modal
          height="90%"
          width="90%"
          progressData={data as IProgress}
        />
      )}
    </div>
  );
}
