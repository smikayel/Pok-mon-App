import { ReactElement } from "react";

interface IProps {
  label: string;
  onClick: () => void;
  className?: string;
  icon?: ReactElement;
}

export default function Button({ label, onClick, className, icon }: IProps) {
  return (
    <button
      className={`flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-white py-2 px-4 w-full rounded-full ${className}`}
      onClick={onClick}
    >
      {label}
      {icon}
    </button>
  );
}
