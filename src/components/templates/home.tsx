import Link from "next/link";
import { CoinList } from "../molecules/coin_list";

export const Home = ({ coin_data }) => {
  return (
    <>
      <header>Coin Website!!!!</header>
      <Link href="/search">To search</Link>
      <CoinList coin_data={coin_data} />
    </>
  );
};
