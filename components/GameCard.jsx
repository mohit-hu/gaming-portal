import { useState } from "react";

export default function GameCard({ game }) {
  const [imgSrc, setImgSrc] = useState(game.image);

  const handleError = () => {
    // Agar original image load na ho, default ya random image set karo
    setImgSrc(`https://source.unsplash.com/600x400/?game,video`);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img
        src={imgSrc}
        alt={game.title}
        onError={handleError} // fallback trigger
        className="w-full h-48 object-cover"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{game.title}</div>
        <p className="text-gray-700 text-base">{game.description}</p>
      </div>
      {game.embedUrl && (
        <div className="px-6 py-4">
          <iframe
            src={game.embedUrl}
            width="100%"
            height="400"
            title={game.title}
          ></iframe>
        </div>
      )}
    </div>
  );
}
