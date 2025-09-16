"use client";
import { useState } from "react";
import { games } from "../lib/gamesData";
import Link from "next/link";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="p-6">
      <h1 className="text-5xl font-bold mb-6 text-center text-purple-700">
        Welcome to Gaming Portal 🎮
      </h1>

      <input
        type="text"
        placeholder="Search your favorite game..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full md:w-2/3 mx-auto p-3 rounded-xl border-2 border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600 mb-8"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <Link
              key={game.id}
              href={`/games/${game.id}`}
              className="bg-white rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300 overflow-hidden"
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-purple-700">{game.title}</h2>
                <p className="text-gray-600 mt-1">{game.description}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500">No games found.</p>
        )}
      </div>
    </main>
  );
}
