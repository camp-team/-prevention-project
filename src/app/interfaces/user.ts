export interface User {
  uid: string;
  userName: string;
  myPokemon: number;
  createdAt: Date;
}

export interface UserLoginList {
  [n: number]: {
    correctNum: number;
    date: string;
    pokemonId1?: number;
    pokemonId2?: number;
  };
}
