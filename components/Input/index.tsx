import { useState } from "react";

const Input = () => {
  const [inputValue, setInputValue] = useState<string>()

  return (
    <div className="border-b-2 border-gray mt-[100px] mb-[35px] pb-[12px] w-[80%]">
      <input
        className='border-none outline-none text-black text-center text-2xl font-semibold w-full'
        type={'text'}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Write here..."
      />
    </div>
  );
};

export default Input;
