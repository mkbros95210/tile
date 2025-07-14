import { useEffect, useState } from 'react'
import { supabase } from '@repo/lib/supabase'
import type { User } from '@supabase/supabase-js'

export function useUser() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const session = supabase.auth.getSession()
    setUser(session?.data.session?.user ?? null)

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
      }
    )

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  return user
}
