import { useRouter } from 'next/router'

export default function StreamPage() {
  const router = useRouter()
  const { matchId } = router.query

  return (
    <div className="bg-black flex items-center justify-center h-screen">
      <h1 className="text-white text-4xl">Streaming Match {matchId}</h1>
    </div>
  )
}
