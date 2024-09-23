interface IProps {
  avatar?: string;
  isActive?: boolean;
  isGuessed?: boolean;
}

export default function PokemonAvatar({ avatar, isActive, isGuessed }: IProps) {
  return (
    <div
      className={`relative flex justify-center items-center w-24 h-24 rounded-full overflow-hidden font-bold text-black ${
        isActive ? "border-2 border-amber-500" : "border-[1px] border-gray-400"
      } ${!isGuessed && 'bg-gray-200'}`}
    >
      {isGuessed ? (
        <img src={avatar} alt="Pokemon Avatar" className="w-18 h-18" />
      ) : "?"}
    </div>
  );
}
