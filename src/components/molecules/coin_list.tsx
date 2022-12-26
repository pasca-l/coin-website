type CoinType = {
  id: number;
  name: string;
  isCollected: boolean;
};

type Props = CoinType[];

const coins = [
  { id: 0, name: "jflakse", isCollected: false },
  { id: 1, name: "asjflkj", isCollected: false },
];

export const CoinList = () => {
  return (
    <>
      {coins.map(({ id, name }: CoinType) => {
        return (
          <div key={id} className="coin_card">
            {name}
          </div>
        );
      })}
    </>
  );
};
