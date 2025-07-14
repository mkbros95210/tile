import { Card } from '@repo/ui/card'
import Link from 'next/link'

const games = [
  { name: 'Blackjack', href: '/casino/blackjack' },
  { name: 'Roulette', href: '/casino/roulette' },
  { name: 'Slots', href: '/casino/slots' },
]

export default function CasinoPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Casino</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {games.map((game) => (
          <Link key={game.name} href={game.href}>
            <a>
              <Card>
                <h2 className="text-2xl font-bold">{game.name}</h2>
              </Card>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}
