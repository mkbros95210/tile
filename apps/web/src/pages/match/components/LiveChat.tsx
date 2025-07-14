import { useState } from 'react'
import { Button } from '@repo/ui/button'

export function LiveChat() {
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>([])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return
    setMessages([...messages, { text: input, sender: 'You' }])
    setInput('')
  }

  return (
    <div className="mt-4">
      <h3 className="text-xl font-bold mb-2">Live Chat</h3>
      <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-y-auto">
        {messages.map((msg, i) => (
          <p key={i}>
            <strong>{msg.sender}:</strong> {msg.text}
          </p>
        ))}
      </div>
      <div className="flex mt-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          placeholder="Say something..."
        />
        <Button onClick={handleSend} className="ml-2">
          Send
        </Button>
      </div>
    </div>
  )
}
