import { useContext } from "react";
import { ModalContext } from "../Context/modal.context";

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
        <button onClick={() => closeModal()}>Close</button>
      </div>
    </div>
  );
};
