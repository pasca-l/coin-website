import Link from "next/link";
import { CoinList } from "../molecules/coin_list";
import { Logout } from "./auth";

export const Home = ({ coin_data }) => {
  return (
    <>
      <header>Coin Website!!!!</header>
      <Logout />
      <Link href="/search">To search</Link>
      <CoinList coin_data={coin_data} />
    </>
  );
};
