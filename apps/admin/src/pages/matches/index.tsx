import { Card } from '@repo/ui/card'
import { Button } from '@repo/ui/button'

// Placeholder data
const matches = [
  { id: 1, team_a: 'Team A', team_b: 'Team B', status: 'Live' },
  { id: 2, team_a: 'Team C', team_b: 'Team D', status: 'Scheduled' },
  { id: 3, team_a: 'Team E', team_b: 'Team F', status: 'Finished' },
]

export default function MatchManager() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold">Match Manager</h1>
        <Button>Create Match</Button>
      </div>
      <Card>
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">ID</th>
              <th className="text-left p-2">Teams</th>
              <th className="text-left p-2">Status</th>
              <th className="text-right p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {matches.map((match) => (
              <tr key={match.id} className="border-b">
                <td className="p-2">{match.id}</td>
                <td className="p-2">
                  {match.team_a} vs {match.team_b}
                </td>
                <td className="p-2">{match.status}</td>
                <td className="text-right p-2">
                  <Button className="mr-2">Edit</Button>
                  <Button>Settle</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
