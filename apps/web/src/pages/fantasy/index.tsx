import { Card } from '@repo/ui/card'
import { Button } from '@repo/ui/button'

export default function FantasyPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold">Fantasy Sports</h1>
        <Button>Create Team</Button>
      </div>
      <Card>
        <p className="text-center p-8">
          Fantasy sports section coming soon! Create your own teams and compete
          with friends.
        </p>
      </Card>
    </div>
  )
}
