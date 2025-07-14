import { Card } from '@repo/ui/card'
import { Button } from '@repo/ui/button'

export default function RiskManagementPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Risk Management</h1>
      <Card>
        <h2 className="text-2xl font-bold mb-2">Market Exposure</h2>
        {/* Placeholder for risk management tools */}
        <p>Real-time market exposure data will be displayed here.</p>
        <div className="mt-4">
          <Button className="bg-red-500 hover:bg-red-600">
            Suspend Betting
          </Button>
        </div>
      </Card>
    </div>
  )
}
