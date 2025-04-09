import Link from 'next/link'
import { Music } from 'lucide-react'

export default function Header() {
  return (
    <Link
      href="/"
      className="flex items-center justify-center gap-4 bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white"
    >
      <header className="flex items-center gap-4">
        <Music className="h-12 w-12 text-white" />
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Song Searcher</h1>
          <p className="tracking-tight">Search for your favorite songs.</p>
        </div>
      </header>
    </Link>
  )
}
