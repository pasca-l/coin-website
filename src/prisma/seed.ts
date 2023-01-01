import prisma from "../lib/prisma";

import { coin_data } from "../public/coin_data";

// const data1 = coin_data.map(
//   ({ uid, url, year, country, name, isCollected }) => ({
//     uid: uid,
//     url: url,
//     year: year,
//     country: country,
//     name: name,
//     isCollected: !!isCollected,
//   })
// );
// console.log(data1[1]);

const data = [
  {
    uid: "c8c7324f-cb91-4746-be6a-e74ab1bb5979",
    url: "https://www.coin-database.com/images/Greece/1-v.jpg",
    year: "2004",
    country: "Greece",
    name: "Summer Olympics in Athens 2004",
    isCollected: false,
  },
  {
    uid: "ec2218fc-bb55-4973-a97c-7a2fc1a77400",
    url: "https://www.coin-database.com/images/Finland/230-v.jpg",
    year: "2004",
    country: "Finland",
    name: "Fifth Enlargement of the European Union in 2004",
    isCollected: false,
  },
];

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
