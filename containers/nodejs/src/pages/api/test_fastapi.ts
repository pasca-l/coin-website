// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const response = await fetch("http://host.docker.internal:8080");
  const url = "https://qiita.com/api/v2/items";
  if (url == undefined) {
    console.log(url);
    return res.status(300);
  }
  const response = await fetch(url);
  console.log(response);
  res.status(200).json({ method: response });
}
