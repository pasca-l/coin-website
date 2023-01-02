import { prisma } from "../lib/prisma";
import { COIN_DATA } from "./coin_data";

const data = COIN_DATA.map(({ isCollected, ...rest }) => ({
  isCollected: !!isCollected,
  ...rest,
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
