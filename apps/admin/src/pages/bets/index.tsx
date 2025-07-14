import { Card } from '@repo/ui/card'

// Placeholder data
const bets = [
  { id: 1, user: 'user1@example.com', match: 'Team A vs Team B', amount: 100, status: 'Placed' },
  { id: 2, user: 'user2@example.com', match: 'Team C vs Team D', amount: 50, status: 'Won' },
  { id: 3, user: 'user1@example.com', match: 'Team E vs Team F', amount: 200, status: 'Lost' },
]

export default function BetMonitor() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Bet Monitor</h1>
      <Card>
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">ID</th>
              <th className="text-left p-2">User</th>
              <th className="text-left p-2">Match</th>
              <th className="text-left p-2">Amount</th>
              <th className="text-left p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {bets.map((bet) => (
              <tr key={bet.id} className="border-b">
                <td className="p-2">{bet.id}</td>
                <td className="p-2">{bet.user}</td>
                <td className="p-2">{bet.match}</td>
                <td className="p-2">${bet.amount}</td>
                <td className="p-2">{bet.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
