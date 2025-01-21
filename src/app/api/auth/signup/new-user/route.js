import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");

    // Parse the request body
    const newUser = await request.json();
    console.log("New user data:", newUser);

    // Insert new user into the database
    const res = await userCollection.insertOne(newUser);

    return NextResponse.json({ message: "New user created", data: res }, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
};
