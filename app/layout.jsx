import '../styles/globals.css'

export const metadata = {
  title: 'Gaming Portal',
  description: 'A small Next.js gaming portal starter built with Tailwind CSS'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <header className="bg-slate-900/50 sticky top-0 z-20 backdrop-blur p-4 border-b border-slate-800">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <h1 className="text-xl font-bold">Gaming Portal</h1>
            <nav>
              <a href="/" className="px-3 py-1 rounded hover:bg-slate-800">Home</a>
            </nav>
          </div>
        </header>

        <main className="max-w-6xl mx-auto py-8">
          {children}
        </main>

        <footer className="mt-12 border-t border-slate-800 py-6 text-center text-sm text-slate-400">
          Built with ❤️ using Next.js and Tailwind — Starter project
        </footer>
      </body>
    </html>
  )
}
