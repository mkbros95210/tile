import { useState } from 'react'
import { supabase } from '@repo/lib/supabase'
import { Button } from '@repo/ui/button'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
      setError(error.message)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold">Login</h1>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-80 p-2 mt-4 text-black border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-80 p-2 mt-4 text-black border border-gray-300 rounded"
      />
      <Button onClick={handleLogin} className="mt-4">
        Login
      </Button>
    </div>
  )
}
