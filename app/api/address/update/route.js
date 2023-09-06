import prisma from "@/app/libs/Prisma";
import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "../../utils";

export async function POST(req) {
  const supabase = createServerSupabaseClient();

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) throw Error();

    const body = await req.json();

    const res = await prisma.addresses.update({
      where: { id: Number(body.addressId) },
      data: {
        name: body.name,
        address: body.address,
        zipcode: body.zipcode,
        city: body.city,
        country: body.country,
      },
    });
    await prisma.$disconnect();
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
    return new NextResponse("Something went wrong", { status: 400 });
  }
}
