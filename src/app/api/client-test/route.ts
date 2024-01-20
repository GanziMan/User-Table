import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  await client.user.create({
    data: {
      name: "helloworld",
      email: "helloworld",
      password: "helloworld",
    },
  });

  res.json({
    ok: true,
    test: "wow",
  });
}
