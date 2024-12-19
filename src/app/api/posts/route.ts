import { NextResponse } from "next/server";
import { Posts } from "@/Data/postsData"; // Adjust the path if needed

export const GET = async () => {
  // Remove this in production if not needed
  console.log("API Route Hit"); 

  return NextResponse.json(Posts); // Respond with the posts data
};
