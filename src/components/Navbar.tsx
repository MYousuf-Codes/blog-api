import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <h1 className="text-3xl font-bold ">daily.tech</h1>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-zinc-900 hover:bg-zinc-700 text-zinc-50">Sign in</button>
          </div>
        </div>
      </div>
    </nav>
  );
}