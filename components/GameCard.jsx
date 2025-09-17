import React from "react";
import { useParams } from "react-router-dom";
import { games } from "./games";

export default function GamePage() {
  const { id } = useParams();                 // /play/:id
  const game = games.find((g) => g.id === parseInt(id, 10));

  if (!game) return <h2 className="text-center mt-10">Game not found</h2>;

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-2">{game.title}</h1>
      <p className="mb-4 text-center">{game.description}</p>

      {/* working iframe – keeps hosts happy */}
      <iframe
        src={game.embedUrl}
        title={game.title}
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
        allow="fullscreen; autoplay; encrypted-media"
        allowFullScreen
        className="rounded shadow-lg"
      />
    </div>
  );
}