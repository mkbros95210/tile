import { useRouter } from 'next/router'
import { Card } from '@repo/ui/card'
import { Button } from '@repo/ui/button'

// This is a placeholder for a real match data fetching hook
const useMatch = (id: string) => {
  if (!id) return { match: null, isLoading: true }
  return {
    match: {
      id,
      team_a: 'Team A',
      team_b: 'Team B',
      odds_a: 1.5,
      odds_b: 2.5,
      odds_draw: 3.0,
    },
    isLoading: false,
  }
}

export default function MatchPage() {
  const router = useRouter()
  const { id } = router.query
  const { match, isLoading } = useMatch(id as string)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!match) {
    return <div>Match not found</div>
  }

  return (
    <div className="container mx-auto p-4 dark:text-white">
      <h1 className="text-4xl font-bold mb-4">
        {match.team_a} vs {match.team_b}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <Card>
            <h2 className="text-2xl font-bold mb-2">Live Stream</h2>
            {/* Placeholder for the live stream component */}
            <div className="bg-black aspect-video"></div>
          </Card>
        </div>
        <div>
          <Card>
            <h2 className="text-2xl font-bold mb-2">Place Your Bet</h2>
            <div className="space-y-4">
              <Button className="w-full justify-between">
                <span>{match.team_a}</span>
                <span>{match.odds_a.toFixed(2)}</span>
              </Button>
              <Button className="w-full justify-between">
                <span>Draw</span>
                <span>{match.odds_draw.toFixed(2)}</span>
              </Button>
              <Button className="w-full justify-between">
                <span>{match.team_b}</span>
                <span>{match.odds_b.toFixed(2)}</span>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
