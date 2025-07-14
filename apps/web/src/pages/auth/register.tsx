import { useState } from 'react'
import { supabase } from '@repo/lib/supabase'
import { Button } from '@repo/ui/button'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<boolean>(false)

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })
    if (error) {
      setError(error.message)
    } else {
      setSuccess(true)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold">Register</h1>
      {error && <p className="text-red-500">{error}</p>}
      {success && (
        <p className="text-green-500">
          Registration successful! Please check your email to verify your
          account.
        </p>
      )}
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
      <Button onClick={handleRegister} className="mt-4">
        Register
      </Button>
    </div>
  )
}
