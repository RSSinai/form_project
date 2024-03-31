import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import Topic from "../../../../models/topic";

export async function POST(request) {
  const { title, description, tags } = await request.json();
  await connectMongoDB();
  await Topic.create({ title, description, tags });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}
