"use client";

import { LinearProgress } from "@mui/material";

import CoinCard from "./CoinCard";
import { useCoins } from "../hooks/useCoins";

export default function Gallery() {
  const { coins, isLoading } = useCoins();

  return isLoading ? (
    <LinearProgress />
  ) : (
    coins?.map((coin) => {
      return <CoinCard key={coin.uid} coin={coin} />;
    })
  );
}
