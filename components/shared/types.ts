export interface IPokemon {
  id: number;
  name: string;
  image: string;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  isGuessed: boolean;
}

export interface IProgress {
  current: number;
  total: number;
}
