export type Coin = {
  uid: string;
  name: string;
  country: string;
  year: number;
  image: Buffer;
};

export function getCoinImageUrl(
  coin: Coin,
  mimeType: string = "image/png"
): string {
  return `data:${mimeType};base64,${coin.image.toString("base64")}`;
}
