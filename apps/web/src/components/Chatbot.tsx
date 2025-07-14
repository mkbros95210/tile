import { useState, useEffect, useRef } from 'react'
import * as use from '@tensorflow-models/universal-sentence-encoder'
import * as tf from '@tensorflow/tfjs'
import { Button } from '@repo/ui/button'

const responses: { [key: string]: string } = {
  greeting: 'Hello! How can I help you with your bets today?',
  stats: "Sure, which match's stats are you interested in?",
  recommendation: 'I recommend betting on Team A for the upcoming match.',
  default: "I'm not sure how to respond to that. Please ask about stats or recommendations.",
}

const intents: { [key: string]: string[] } = {
  greeting: ['hello', 'hi', 'hey'],
  stats: ['stats', 'statistics', 'show me stats'],
  recommendation: ['recommend', 'what should I bet on', 'give me a tip'],
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([])
  const [input, setInput] = useState('')
  const modelRef = useRef<use.UniversalSentenceEncoder | null>(null)
  const intentsRef = useRef<tf.Tensor2D | null>(null)

  useEffect(() => {
    const loadModel = async () => {
      const model = await use.load()
      modelRef.current = model

      const intentPhrases = Object.values(intents).flat()
      const embeddings = await model.embed(intentPhrases)
      intentsRef.current = embeddings
    }
    loadModel()
  }, [])

  const handleSend = async () => {
    if (!input.trim() || !modelRef.current || !intentsRef.current) return

    const newMessages = [...messages, { text: input, sender: 'user' as 'user' }]
    setMessages(newMessages)
    setInput('')

    const inputEmbedding = await modelRef.current.embed([input])
    const scores = tf.matMul(inputEmbedding, intentsRef.current, false, true).dataSync()

    const intentKeys = Object.keys(intents)
    const intentScores = intentKeys.map((key, i) => {
        const intentPhrases = intents[key]
        const intentIndices = intentPhrases.map((_, j) => i * intentPhrases.length + j)
        const maxScore = Math.max(...intentIndices.map(index => scores[index]))
        return { intent: key, score: maxScore }
    })

    const bestIntent = intentScores.reduce((a, b) => a.score > b.score ? a : b)
    const response = responses[bestIntent.score > 0.5 ? bestIntent.intent : 'default']

    setMessages([...newMessages, { text: response, sender: 'bot' }])
  }

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)} className="fixed bottom-4 right-4">
        Chat
      </Button>
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl flex flex-col">
          <div className="p-4 border-b dark:border-gray-700">
            <h3 className="font-bold text-lg">AI Betting Assistant</h3>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, i) => (
              <div key={i} className={`my-2 ${msg.sender === 'user' ? 'text-right' : ''}`}>
                <span
                  className={`inline-block p-2 rounded-lg ${
                    msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="p-4 border-t dark:border-gray-700 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              placeholder="Ask me anything..."
            />
            <Button onClick={handleSend} className="ml-2">
              Send
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
