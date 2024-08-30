import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET() {
  const res = await prisma.coin.findMany({
    take: 10,
  });
  return NextResponse.json(res);
}
