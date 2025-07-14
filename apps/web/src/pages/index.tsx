import Head from 'next/head'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { useUser } from '@repo/hooks/useUser'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useMatches } from '@repo/hooks/useMatches'
import { Card } from '@repo/ui/card'

export default function Home() {
  const user = useUser()
  const { data: matches, isLoading } = useMatches()

  return (
    <div className="flex flex-col items-center min-h-screen py-2 dark:bg-gray-900 dark:text-white">
      <Head>
        <title>Ultra Betting App</title>
        <meta name="description" content="The future of sports betting." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-full flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-primary">
          Ultra Betting
        </h1>
        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
          {user ? (
            <p>Welcome, {user.email}</p>
          ) : (
            <div>
              <Link href="/auth/login" className="mr-2">
                Login
              </Link>
              <Link href="/auth/register">Register</Link>
            </div>
          )}
        </div>
      </header>

      <main className="flex flex-col items-center w-full flex-1 px-4 md:px-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold mt-12"
        >
          Live Matches
        </motion.h2>

        {isLoading ? (
          <p>Loading matches...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full">
            {matches?.map((match) => (
              <Card key={match.id}>
                <Link href={`/match/${match.id}`}>
                  <a>
                    <h3 className="text-xl font-bold">
                      {match.team_a} vs {match.team_b}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {new Date(match.match_time).toLocaleString()}
                    </p>
                  </a>
                </Link>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
