import { Suspense, use } from 'react'
import SongView from '@/components/SongView'
import Loading from '@/components/Loading'

export default function SongPage(props: { params: Promise<{ id: string }> }) {
  const params = use(props.params)

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SongView songId={params.id} />
      </Suspense>
    </>
  )
}
