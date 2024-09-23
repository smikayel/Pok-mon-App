import Button from "../Button";
import ImageIcon from "../../app/Assets/ArrowRight.svg";
import Image from "next/image";
import Input from "../Input";

export default function GuessCard() {
  return (
    <div className="shadow-primary_shadow flex flex-[1] flex-col items-center justify-between h-full w-full rounded-md p-[100px]">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi4CCuQkPI4tcKAVFl8dc8p4OhH5-Zq4DGYc2Kwwa4KQbvH34f3s6Kq_7bSgxQ65516NM&usqp=CAU"
        alt="pokemon"
        width={300}
        height={300}
      />
      <Input />
      <Button
        label="GUESS"
        onClick={() => {
          console.log("here");
        }}
        icon={<Image src={ImageIcon} alt="->" height={24} width={24} />}
      />
    </div>
  );
}
