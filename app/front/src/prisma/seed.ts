import { prisma } from "../lib/prisma";
import COIN_DATA from "./coin_data.json";
import { readFileSync } from "fs";
import { resolve } from "path";

// const data = COIN_DATA["coins"].map(({ year, ...other }) => ({
//   year: +year,
//   ...other,
// }));

// async function main() {
//   await prisma.coin.createMany({
//     data,
//   });
// }

const imageData = readFileSync(resolve(__dirname, "../public/github-mark.png"));

async function main() {
  await prisma.coin.createMany({
    data: [
      {
        name: "test1",
        country: "Japan",
        year: 1000,
        image: imageData,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
