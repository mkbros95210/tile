import { Card } from '@repo/ui/card'

// Placeholder data
const leaderboardData = [
  { id: 1, name: 'Alice', score: 1500 },
  { id: 2, name: 'Bob', score: 1250 },
  { id: 3, name: 'Charlie', score: 1100 },
  { id: 4, name: 'David', score: 950 },
  { id: 5, name: 'Eve', score: 800 },
]

export default function LeaderboardPage() {
  return (
    <div className="container mx-auto p-4 dark:text-white">
      <h1 className="text-4xl font-bold mb-4">Leaderboard</h1>
      <Card>
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Rank</th>
              <th className="text-left p-2">Name</th>
              <th className="text-right p-2">Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((user, index) => (
              <tr key={user.id} className="border-b">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{user.name}</td>
                <td className="text-right p-2">{user.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
