import { ChangeEvent, useState } from "react";

interface IProps {
  value: string,
  onValueChange: (newValue: string) => void 
}

const Input = ({value, onValueChange}: IProps) => {

  return (
    <div className="border-b-2 border-gray mt-[100px] mb-[35px] pb-[12px] w-[80%]">
      <input
        className='border-none outline-none text-black text-center text-2xl font-semibold w-full'
        type={'text'}
        value={value}
        onChange={(e) => {onValueChange(e.target.value)}}
        placeholder="Write here..."
      />
    </div>
  );
};

export default Input;
