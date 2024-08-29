import axios from "axios";
import { prisma } from "../lib/prisma";
import COINDATA from "./coindata.json";

type RawCoinData = {
  name: string;
  country: string;
  year: string;
  url: string;
};

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchImage(url: string) {
  try {
    const res = await axios.get(url, {
      responseType: "arraybuffer",
    });
    return Buffer.from(res.data, "base64");
  } catch (error) {
    console.error(`Error fetching ${url}: ${error}`);
    return Buffer.from("");
  }
}

async function processData(data: RawCoinData[]) {
  const processed = await Promise.all(
    data.map(async ({ year, url, ...other }) => ({
      year: +year,
      image: await fetchImage(url),
      ...other,
    }))
  );
  return processed;
}

async function main() {
  const data = COINDATA as RawCoinData[];

  const batchSize = 5;
  for (let i = 0; i < data.length; i += batchSize) {
    const batch = data.slice(i, i + batchSize);

    const processed = await processData(batch);
    await prisma.coin.createMany({
      data: processed,
    });

    await delay(2000);
  }
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
