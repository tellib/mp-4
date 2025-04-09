import Loading from '@/components/Loading'
import SearchCard from '@/components/SearchCard'
import { Suspense } from 'react'

export default function HomePage() {
  return (
    <div className="mx-auto flex flex-1 items-center justify-center">
      <Suspense fallback={<Loading />}>
        <SearchCard />
      </Suspense>
    </div>
  )
}
