import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const client = new PrismaClient();

export async function POST(request: any) {
  const { id } = await request.json();

  const findUsers = await client.user.findUnique({
    where: { id: Number(id) },
  });

  return NextResponse.json({ result: findUsers });
}

export async function PUT(request: any) {
  const { id, name, email, password } = await request.json();

  const UpdateUser = await client.user.update({
    where: {
      id: Number(id),
    },
    data: {
      name: name,
      email: email,
      password: password,
    },
  });

  return NextResponse.json({ result: true });
}

export async function DELETE(request: any) {
  const { id } = await request.json();

  const findUsers = await client.user.delete({
    where: { id: Number(id) },
  });

  return NextResponse.json({ result: findUsers });
}
