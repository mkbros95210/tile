import { Card } from '@repo/ui/card'

const vipTiers = [
  { name: 'Bronze', benefits: ['5% Bonus', 'Standard Support'] },
  { name: 'Silver', benefits: ['10% Bonus', 'Priority Support', 'Lower Fees'] },
  { name: 'Gold', benefits: ['15% Bonus', 'Dedicated Support', 'No Fees'] },
  { name: 'Elite', benefits: ['25% Bonus', 'Personal Manager', 'Exclusive Events'] },
]

export default function VipPage() {
  return (
    <div className="container mx-auto p-4 dark:text-white">
      <h1 className="text-4xl font-bold mb-4">VIP Membership</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {vipTiers.map((tier) => (
          <Card key={tier.name} className="flex flex-col">
            <h2 className="text-2xl font-bold mb-2">{tier.name}</h2>
            <ul className="space-y-2 flex-grow">
              {tier.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  )
}
