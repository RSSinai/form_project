import { connectMongoDB } from "../../../../../lib/mongodb";
import Topic from "../../../../../models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newTitle: title,
    newDescription: description,
    newTags: tags,
  } = await request.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { title, description, tags });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}

// New POST function for submitting an answer
export async function POST(request, { params }) {
  const { id } = params;
  const { answer } = await request.json(); // Assuming the request body just has the answer field
  await connectMongoDB();

  // Update the topic document to add the answer to the comments array
  const updatedTopic = await Topic.findByIdAndUpdate(
    id,
    {
      $push: {
        comments: {
          answer: answer,
          rating: 0, // Initialize rating counter at 0
        },
      },
    },
    { new: true } // Return the modified document
  );

  if (updatedTopic) {
    return NextResponse.json(
      { message: "Answer added successfully" },
      { status: 200 }
    );
  } else {
    return NextResponse.json({ message: "Topic not found" }, { status: 404 });
  }
}
