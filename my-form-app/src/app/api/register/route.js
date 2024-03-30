const { sha512 } = require("js-sha512");
import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";

export async function POST(req) {
  try {
    const { name, nickname, email, password } = await req.json();
    const hashedPassword = sha512.create(password);
    await connectMongoDB();
    await User.create({ name, nickname, email, password: hashedPassword });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
