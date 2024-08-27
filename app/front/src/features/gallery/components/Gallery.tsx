import { useCoins } from "../hooks/useCoins";
import CoinCard from "./CoinCard";

export default function Gallery() {
  const coins = useCoins();

  return coins.map((coin) => {
    return <CoinCard key={coin.uid} coin={coin} />;
  });
}
