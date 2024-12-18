import { NextResponse } from "next/server";

export const GET = async () => {
  console.log("API Route Hit"); // Debugging log

  const Posts = [
    {
      id: 1,
      title: "What is Cloud Computing",
      src: "/cloude1.webp",
      author: "Nihal Naveed",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      id: 2,
      title: "How to use AI effectively",
      src: "/claude2.jpeg",
      author: "Ayaan Naveed",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      id: 3,
      title: "How to Learn Web Development",
      src: "/claude3.jpeg",
      author: "Nihal Naveed",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
  ];

  return NextResponse.json(Posts);
};
