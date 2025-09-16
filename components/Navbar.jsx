import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-4 flex justify-between items-center shadow-xl">
      <Link href="/" className="text-3xl font-extrabold tracking-wide">
        🎮 Gaming Portal
      </Link>
      <div className="space-x-6 text-lg font-semibold">
        <Link href="/" className="hover:text-yellow-300 transition-colors">Home</Link>
        <Link href="/games/1" className="hover:text-yellow-300 transition-colors">Games</Link>
          <Link href="/about" className="hover:text-yellow-300 transition-colors">About</Link> 
      </div>
    </nav>
  );
}
