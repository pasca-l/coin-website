import Image from "next/image";
import {
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Typography,
} from "@mui/material";

import { Coin, getCoinImageUrl } from "../types/coin";

export default function CoinCard({ coin }: { coin: Coin }) {
  const isCollected = true;

  return (
    <Card>
      <CardMedia>
        <Image
          src={getCoinImageUrl(coin)}
          width={150}
          height={150}
          alt={`Image for ${coin.name}`}
        />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom>{coin.name}</Typography>
        {isCollected ? <Checkbox defaultChecked /> : <Checkbox />}
      </CardContent>
    </Card>
  );
}
