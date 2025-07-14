import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

serve(async (req) => {
  try {
    const { matchId, winning_outcome } = await req.json()
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_ANON_KEY')!,
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    )

    // 1. Update match status
    await supabase
      .from('matches')
      .update({ status: 'finished' })
      .eq('id', matchId)

    // 2. Get all bets for the match
    const { data: bets, error } = await supabase
      .from('bets')
      .select('*')
      .eq('match_id', matchId)

    if (error) throw error
    if (!bets) return

    // 3. Settle each bet
    for (const bet of bets) {
      const status = bet.bet_on === winning_outcome ? 'won' : 'lost'
      await supabase
        .from('bets')
        .update({ status })
        .eq('id', bet.id)
    }

    return new Response(JSON.stringify({ message: 'Bets settled successfully' }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
