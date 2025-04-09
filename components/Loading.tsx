import { LoaderCircle } from 'lucide-react'

export default function Loading() {
  return (
    <div className="flex w-full flex-1 items-center justify-center">
      <LoaderCircle
        className="h-12 w-full animate-spin"
        aria-label="Loading..."
      />
    </div>
  )
}
