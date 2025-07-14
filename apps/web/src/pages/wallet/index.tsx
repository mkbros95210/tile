import { useUser } from '@repo/hooks/useUser'
import { supabase } from '@repo/lib/supabase'
import { useEffect, useState } from 'react'
import { Card } from '@repo/ui/card'
import { Button } from '@repo/ui/button'

interface Transaction {
  id: number
  amount: number
  type: 'deposit' | 'withdrawal'
  created_at: string
}

export default function Wallet() {
  const user = useUser()
  const [balance, setBalance] = useState(0)
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    if (user) {
      // Simulate fetching balance and transactions
      setBalance(1000)
      setTransactions([
        { id: 1, amount: 500, type: 'deposit', created_at: new Date().toISOString() },
        { id: 2, amount: 100, type: 'withdrawal', created_at: new Date().toISOString() },
      ])
    }
  }, [user])

  const handleDeposit = () => {
    // Simulate a deposit
    setBalance(balance + 100)
    setTransactions([...transactions, { id: Date.now(), amount: 100, type: 'deposit', created_at: new Date().toISOString() }])
  }

  const handleWithdraw = () => {
    // Simulate a withdrawal
    if (balance >= 50) {
      setBalance(balance - 50)
      setTransactions([...transactions, { id: Date.now(), amount: 50, type: 'withdrawal', created_at: new Date().toISOString() }])
    }
  }

  if (!user) {
    return <div>Please log in to view your wallet.</div>
  }

  return (
    <div className="container mx-auto p-4 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">My Wallet</h1>
      <Card className="mb-4">
        <h2 className="text-xl font-bold">Balance</h2>
        <p className="text-2xl">${balance.toFixed(2)}</p>
      </Card>
      <div className="mb-4">
        <Button onClick={handleDeposit} className="mr-2">Deposit $100</Button>
        <Button onClick={handleWithdraw}>Withdraw $50</Button>
      </div>
      <Card>
        <h2 className="text-xl font-bold">Transaction History</h2>
        <ul>
          {transactions.map((tx) => (
            <li key={tx.id} className="flex justify-between py-2 border-b">
              <span>{tx.type}</span>
              <span>${tx.amount.toFixed(2)}</span>
              <span>{new Date(tx.created_at).toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
