import { getSongList } from '@/actions'
import Link from 'next/link'
import Image from 'next/image'
// import { setTimeout } from "timers/promises";

export default async function SongListView(props: { query: string }) {
  // await setTimeout(1000); // this was for testing if the loading was working
  const songList = await getSongList(props.query)

  if (!songList || !songList.hits) {
    return (
      <div className="flex-1">
        <p className="text-foreground/60">No songs found</p>
      </div>
    )
  }

  return (
    <div>
      {songList.hits.map((hit) => (
        <Link
          href={`/song/${hit.result.id}`}
          key={hit.result.id}
          className="group border-foreground/10 hover:bg-foreground/5 flex gap-x-4 border-b first:border-t"
        >
          <Image
            src={hit.result.song_art_image_thumbnail_url}
            alt={hit.result.title}
            width={64}
            height={64}
          />
          <div className="flex flex-col justify-center">
            <h3 className="font-medium">{hit.result.title}</h3>
            <p className="text-foreground/60">{hit.result.artist_names}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
