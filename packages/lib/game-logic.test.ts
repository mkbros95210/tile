import { calculatePayout } from './game-logic'

describe('calculatePayout', () => {
  it('should return 0 if there are no winning users', () => {
    expect(calculatePayout(100, 0)).toBe(0)
  })

  it('should correctly calculate the payout for a single winner', () => {
    // 100 * 0.8 = 80
    // 80 / 1 = 80
    expect(calculatePayout(100, 1)).toBe(80)
  })

  it('should correctly calculate the payout for multiple winners', () => {
    // 100 * 0.8 = 80
    // 80 / 4 = 20
    expect(calculatePayout(100, 4)).toBe(20)
  })

  it('should handle a total pot of 0', () => {
    expect(calculatePayout(0, 5)).toBe(0)
  })
})
