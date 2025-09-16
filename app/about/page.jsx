export default function AboutPage() {
  return (
    <main className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <h1 className="text-5xl font-extrabold text-center text-purple-700 mb-6">
        About Gaming Portal 🎮
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-700 text-center mb-12">
        Welcome to Gaming Portal! Our mission is to provide players with a huge variety of fun, free-to-play games directly in your browser. Whether you enjoy arcade games, puzzles, platformers, or racing adventures, we have something for everyone. No downloads required — just click and play!
      </p>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
          <h2 className="text-2xl font-bold text-purple-600 mb-2">🎯 Play Anytime</h2>
          <p className="text-gray-600">
            Play directly from your browser without downloading any files. Fast and easy access to hundreds of games.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
          <h2 className="text-2xl font-bold text-purple-600 mb-2">🕹️ Huge Game Library</h2>
          <p className="text-gray-600">
            From arcade classics to modern hits, explore a wide variety of games across different genres.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
          <h2 className="text-2xl font-bold text-purple-600 mb-2">📊 Track Your Favorites</h2>
          <p className="text-gray-600">
            Create your own list of favorite games and come back to play them anytime you want.
          </p>
        </div>
      </div>

      {/* Footer */}
      <p className="text-center text-gray-500 mt-12">
        © 2025 Gaming Portal. All rights reserved.
      </p>
    </main>
  );
}
