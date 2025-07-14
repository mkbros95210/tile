import { Card } from '@repo/ui/card'
import { Button } from '@repo/ui/button'

export default function ReferralPage() {
  const referralLink = 'https://ultrabetting.app/register?ref=your_unique_code'

  return (
    <div className="container mx-auto p-4 dark:text-white">
      <h1 className="text-4xl font-bold mb-4">Refer a Friend</h1>
      <Card>
        <p className="mb-4">
          Share your referral link with your friends and earn rewards when they
          sign up and place their first bet.
        </p>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={referralLink}
            readOnly
            className="w-full p-2 border rounded bg-gray-800 text-white"
          />
          <Button onClick={() => navigator.clipboard.writeText(referralLink)}>
            Copy
          </Button>
        </div>
      </Card>
    </div>
  )
}
