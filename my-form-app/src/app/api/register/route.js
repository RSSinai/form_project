import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    console.log("Name:", name);
    console.log("Password:", password);
    console.log("Email:", email);

    return NextResponse.json({ message: "user registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
