"use client";

import { useEffect, useState } from "react";

import { Coin } from "../types/coin";

export const useCoins = () => {
  const [coins, setCoins] = useState<Coin[]>();

  useEffect(() => {
    const fetchCoin = async () => {
      let res = await fetch("http://localhost:3000/api/coins", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      let data = await res.json();

      setCoins(
        data.map(({ image, ...other }: { image: string }) => ({
          image: Buffer.from(image),
          ...other,
        }))
      );
    };

    fetchCoin();
  }, []);

  return { coins, isLoading: !coins };
};
