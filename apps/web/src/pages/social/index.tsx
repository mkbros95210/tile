import { Card } from '@repo/ui/card'
import { Button } from '@repo/ui/button'

export default function SocialPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Social Hub</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-2">Activity Feed</h2>
          {/* Placeholder for activity feed */}
          <p>User activity will be shown here.</p>
        </Card>
        <div>
          <Card>
            <h2 className="text-2xl font-bold mb-2">Find Friends</h2>
            {/* Placeholder for friend search */}
            <input
              type="text"
              placeholder="Search for users..."
              className="w-full p-2 border rounded"
            />
            <Button className="w-full mt-2">Search</Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
