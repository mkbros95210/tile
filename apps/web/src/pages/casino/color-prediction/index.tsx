import { Card } from '@repo/ui/card'
import { Button } from '@repo/ui/button'
import { useState, useEffect } from 'react'

const colors = ['red', 'green', 'blue']

export default function ColorPredictionPage() {
  const [timer, setTimer] = useState(30)
  const [winningColor, setWinningColor] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000)
      return () => clearInterval(interval)
    } else {
      const winner = colors[Math.floor(Math.random() * colors.length)]
      setWinningColor(winner)
      // Reset after 5 seconds
      setTimeout(() => {
        setTimer(30)
        setWinningColor(null)
        setSelectedColor(null)
      }, 5000)
    }
  }, [timer])

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-primary">
        Color Prediction
      </h1>
      <Card className="w-full max-w-md text-white">
        <div className="text-center p-6">
          <h2 className="text-3xl font-bold mb-4">Time Remaining</h2>
          <div className="text-6xl font-mono mb-6">{timer}</div>
          {winningColor && (
            <div className="mb-4">
              <h3 className="text-2xl">The winning color is:</h3>
              <div
                className="w-24 h-24 rounded-full mx-auto mt-2"
                style={{ backgroundColor: winningColor }}
              />
            </div>
          )}
          <div className="grid grid-cols-3 gap-4">
            {colors.map((color) => (
              <Button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`p-8 rounded-lg text-2xl ${
                  selectedColor === color ? 'ring-4 ring-white' : ''
                }`}
                style={{ backgroundColor: color }}
              >
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}
