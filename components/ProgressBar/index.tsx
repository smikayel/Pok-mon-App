interface IProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: IProps) {
  return (
    <div className="mt-[35px] max-w-[230px]">
      <div className="w-full bg-gray_500 rounded-full h-[4px]">
        <div
          className="bg-amber-500 h-[4px] rounded-full"
          style={{ width: (current * total) / 100 }}
        ></div>
      </div>
      <p className="text-black opacity-50 mt-[15px]">
        {current}/{total} Guessed
      </p>
    </div>
  );
}
