import { Card } from '@repo/ui/card'
import { Button } from '@repo/ui/button'
import Web3 from 'web3'

export default function CryptoWalletPage() {
  const handleConnect = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        const web3 = new Web3(window.ethereum)
        // You can now use the web3 instance to interact with the user's wallet
      } catch (error) {
        console.error('User denied account access')
      }
    } else {
      alert('Please install MetaMask!')
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Crypto Wallet</h1>
      <Card>
        <p className="mb-4">
          Connect your MetaMask wallet to deposit and withdraw funds using
          cryptocurrency.
        </p>
        <Button onClick={handleConnect}>Connect MetaMask</Button>
      </Card>
    </div>
  )
}

declare global {
  interface Window {
    ethereum: any
  }
}
