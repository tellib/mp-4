import { Suspense, use } from 'react'
import { redirect } from 'next/navigation'
import SearchInput from '@/components/SearchInput'
import SongListView from '@/components/SongListView'
import Loading from '@/components/Loading'

export default function SearchPage(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const searchParams = use(props.searchParams)
  const query = searchParams.query as string

  if (!query) {
    redirect('/')
  }

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SearchInput />
        <SongListView query={query} />
      </Suspense>
    </>
  )
}
