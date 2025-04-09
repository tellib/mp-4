import SearchInput from './SearchInput'

export default function SearchCard() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-gradient-to-b from-blue-100 to-blue-200 p-8 shadow-md ring-1 ring-black/10">
      <h2 className="text-2xl font-bold">Song Searcher</h2>
      <p>
        Enter a song title to get lyrics and other information about the song.
      </p>
      <SearchInput />
    </div>
  )
}
