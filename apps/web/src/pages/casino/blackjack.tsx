import { Card } from '@repo/ui/card'
import { Button } from '@repo/ui/button'

export default function BlackjackPage() {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">Blackjack</h1>
      <Card className="w-full max-w-4xl">
        <div className="flex justify-center items-center h-96 bg-green-700 rounded-lg">
          <p className="text-white text-2xl">Blackjack table coming soon!</p>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <Button>Hit</Button>
          <Button>Stand</Button>
        </div>
      </Card>
    </div>
  )
}
