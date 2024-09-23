import Image from "next/image";
import { useContext } from "react";
import { ModalContext } from "../Context/modal.context";
import PokemonInfoCard from "../PokemonInfoCard";
import PokemonListComponent from "../PokemonListComponent";

import CloseIcon from "../../app/Assets/CloseIcon.svg";

import style from "./index.module.scss";

interface IModal {
  height: string | number;
  width: string | number;
}

export const Modal = ({ height, width }: IModal) => {
  const { state, updateState } = useContext(ModalContext);

  const closeModal = () => {
    updateState(!state);
  };

  return (
    <div className={`${style.ModalContainer}`}>
      <div
        className={`${style.ModalContent}`}
        style={{ height: height, width: width }}
      >
        <div className="flex justify-between">
          <div className="flex gap-8 justify-center items-center">
            <div className="font-inter text-2xl font-bold leading-[30px] text-left text-black">
              My Pokedex
            </div>
            <div className="font-inter text-left text-lg text-black opacity-[0.5]">
              120/151 Guessed
            </div>
          </div>
          <button onClick={closeModal}>
            <Image src={CloseIcon} height={30} width={30} alt="close" />
          </button>
        </div>
        <div className="flex h-full pt-[60px] pb-[30px]">
          <PokemonListComponent />
          <PokemonInfoCard />
        </div>
      </div>
    </div>
  );
};
