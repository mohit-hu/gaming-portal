"use client";
import { games } from '../../../lib/gamesData';

export default function GamePage({ params }) {
  const game = games.find((g) => g.id === parseInt(params.id));
  if (!game) return <h1 className="p-6 text-center text-red-600">Game not found</h1>;

  return (
    <main className="p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-purple-700 mb-4">{game.title}</h1>
      <p className="text-gray-700 mb-6">{game.description}</p>

      {game.embedUrl ? (
        <iframe
          src={game.embedUrl}
          width="90%"
          height="600"
          className="rounded-2xl shadow-xl border-4 border-purple-400"
          allowFullScreen
        />
      ) : (
        <img
          src={game.image}
          alt={game.title}
          className="rounded-2xl shadow-xl"
        />
      )}
    </main>
  );
}
