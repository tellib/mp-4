import { getSong } from '@/actions'
// import { setTimeout } from "timers/promises";

export default async function SongView(props: { songId: string }) {
  // await setTimeout(1000); // this was for testing if the loading was working
  const song = await getSong(props.songId)

  if (!song) {
    return (
      <div className="prose">
        <p>No song found</p>
      </div>
    )
  }

  return (
    <>
      <div className="mb-4 text-blue-500">
        <h2 className="text-lg font-bold">Song Details</h2>
        {song.lyrics.tracking_data?.title && (
          <p>{song.lyrics.tracking_data.title}</p>
        )}
        {song.lyrics.tracking_data?.primary_artist && (
          <p>{song.lyrics.tracking_data.primary_artist}</p>
        )}
        {song.lyrics.tracking_data?.primary_album && (
          <p>{song.lyrics.tracking_data.primary_album}</p>
        )}
        {song.lyrics.tracking_data?.release_date && (
          <p className="text-sm">
            Release Date: {song.lyrics.tracking_data.release_date}
          </p>
        )}
      </div>
      <div className="prose whitespace-pre-wrap">
        {song.lyrics.lyrics.body.plain}
      </div>
    </>
  )
}
