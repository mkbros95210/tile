import { useQuery } from '@tanstack/react-query'
import { supabase } from '@repo/lib/supabase'

const fetchMatches = async () => {
  const { data, error } = await supabase.from('matches').select('*')
  if (error) {
    throw new Error(error.message)
  }
  return data
}

export const useMatches = () => {
  return useQuery({
    queryKey: ['matches'],
    queryFn: fetchMatches,
  })
}
