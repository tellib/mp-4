'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useRef, useEffect } from 'react'

export default function SearchInput() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const queryParam = searchParams.get('query')
    if (queryParam && inputRef.current) {
      inputRef.current.value = queryParam
      document.title = `Song Searcher - Search Results for ${queryParam}`
    }
  }, [searchParams])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const query = inputRef.current?.value.trim()
    if (query) {
      router.push(`/search?query=${encodeURIComponent(query)}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full gap-2">
      <label htmlFor="search-input" className="sr-only">
        Song Name
      </label>
      <input
        id="search-input"
        type="text"
        ref={inputRef}
        placeholder="Search lyrics & more"
        className="border-foreground/30 focus:ring-accent flex-1 rounded-md border bg-white px-4 py-2 focus:ring-2 focus:outline-none"
        required
        autoFocus
      />
      <button
        type="submit"
        className="text-background flex cursor-pointer items-center gap-2 rounded-md bg-blue-600 px-4 hover:bg-blue-700"
      >
        <Search />
        <span className="sr-only">Search</span>
      </button>
    </form>
  )
}
