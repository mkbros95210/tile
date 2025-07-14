import { Card } from '@repo/ui/card'

export default function AdminDashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <h2 className="text-xl font-bold">Total Users</h2>
          <p className="text-2xl">1,234</p>
        </Card>
        <Card>
          <h2 className="text-xl font-bold">Total Bets</h2>
          <p className="text-2xl">5,678</p>
        </Card>
        <Card>
          <h2 className="text-xl font-bold">Total Revenue</h2>
          <p className="text-2xl">$12,345</p>
        </Card>
        <Card>
          <h2 className="text-xl font-bold">Live Matches</h2>
          <p className="text-2xl">12</p>
        </Card>
      </div>
    </div>
  )
}
