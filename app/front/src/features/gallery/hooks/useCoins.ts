import { Coin } from "../types/coin";

export const useCoins = () => {
  const coins: Coin[] = [
    {
      uid: "1",
      name: "test",
      country: "t",
      year: 1000,
      image: Buffer.from("test"),
    },
    {
      uid: "2",
      name: "test",
      country: "t",
      year: 1000,
      image: Buffer.from("test"),
    },
  ];

  return coins;
};
