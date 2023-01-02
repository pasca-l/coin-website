import { prisma } from "../lib/prisma";
import COIN_DATA from "./coin_data.json";

const data = COIN_DATA["coins"].map(({ year, isCollected, ...other }) => ({
  year: +year,
  isCollected: !!isCollected,
  ...other,
}));

async function main() {
  await prisma.coin.createMany({
    data,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
