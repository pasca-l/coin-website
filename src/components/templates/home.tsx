import { CoinList } from "../molecules/coin_list";

export const Home = ({ coin_data }) => {
  return (
    <>
      <header>Coin Website!!!!</header>
      <CoinList coin_data={coin_data} />
    </>
  );
};
