import { Card } from '@repo/ui/card'
import { Button } from '@repo/ui/button'
import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { PokerChip } from './components/PokerChip'

const initialCards = ['🂠', '🂠', '🂠']

export default function TeenPattiPage() {
  const [playerCards, setPlayerCards] = useState(initialCards)
  const [dealerCards, setDealerCards] = useState(initialCards)
  const [gameState, setGameState] = useState('betting') // betting, playing, finished

  const handleDeal = () => {
    // In a real game, cards would be dealt from a shuffled deck
    setPlayerCards(['🂡', '🂢', '🂣'])
    setDealerCards(['🂡', '🂢', '🂣']) // Placeholder
    setGameState('playing')
  }

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-primary">
        Teen Patti
      </h1>
      <Card className="w-full max-w-5xl bg-green-800 text-white border-yellow-400 border-4">
        <div className="h-[70vh] relative">
          <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Suspense fallback={null}>
              <PokerChip position={[0, -2, 0]} />
              <Environment preset="city" />
            </Suspense>
            <OrbitControls />
          </Canvas>
          {/* UI elements can be overlaid using HTML */}
        </div>
      </Card>
    </div>
  )
}
