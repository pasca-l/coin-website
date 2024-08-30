"use client";

import { useQuery } from "@tanstack/react-query";

import { Coin } from "../types/coin";

export const useCoins = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["fetchCoins"],
    queryFn: async () => {
      let res = await fetch("http://localhost:3000/api/coins", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      let data = await res.json();

      return data.map(({ image, ...other }: { image: string }) => ({
        image: Buffer.from(image),
        ...other,
      })) as Coin[];
    },
  });

  return { coins: data ?? [], isLoading };
};
