/**
 * Calculates the payout for a winning user in a game,
 * ensuring a 20% profit margin for the house.
 *
 * @param totalPot The total amount of money bet in the game.
 * @param winningUsers The number of users who won the game.
 * @returns The amount each winning user receives.
 */
export function calculatePayout(totalPot: number, winningUsers: number): number {
  if (winningUsers <= 0) {
    return 0
  }

  const houseCut = totalPot * 0.2
  const prizePool = totalPot - houseCut
  return prizePool / winningUsers
}
