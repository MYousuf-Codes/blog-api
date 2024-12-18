import Image from "next/image";
import Link from "next/link";

export interface Posts {
  id: number;
  title: string;
  author: string;
  src: string;
  content: string;
}

export default async function Blog() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "/api/posts";
    console.log("Fetching posts from:", apiUrl); // Add logging to check the URL

    const res = await fetch(apiUrl);

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts: Posts[] = await res.json();

    return (
      <div className="max-w-screen-xl mx-auto px-4 pt-20">
        <h1 className="text-4xl font-bold text-center py-10">Recent Blog</h1>
        <div className="grid sm:grid-cols-3 grid-cols-1 md:place-items-start place-items-center gap-4">
          {posts.map((post) => (
            <Link
              href={`/blog/${post.id}`}
              className="flex flex-col gap-3"
              key={post.id}
            >
              <div className="w-[400px] aspect-auto overflow-hidden">
                <Image
                  src={post.src}
                  alt={post.title}
                  height={1000}
                  width={1000}
                  priority={true}
                  className="rounded-t-md transition-transform hover:scale-105 duration-700 hover:rounded-md object-contain"
                />
              </div>
              <h4>{post.author}</h4>
              <h1 className="text-2xl font-semibold">{post.title}</h1>
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);

    return (
      <div className="max-w-screen-xl mx-auto px-4 pt-20">
        <h1 className="text-4xl font-bold text-center py-10">Recent Blog</h1>
        <p className="text-center text-red-500">Failed to load posts.</p>
      </div>
    );
  }
}
