import { describe, it, expect } from 'vitest'
import { numHasValue } from '../src/runtime/utils/numHasValue'

describe('numHasValue', () => {
  it('returns true if argument is a non-nullish, positive number', () => {
    expect(numHasValue(1)).toBe(true)
    expect(numHasValue('1')).toBe(true)
    expect(numHasValue('')).toBe(false)
    expect(numHasValue('0')).toBe(false)
    expect(numHasValue(0)).toBe(false)
    expect(numHasValue(-1)).toBe(false)
    expect(numHasValue(null)).toBe(false)
    expect(numHasValue(undefined)).toBe(false)
    expect(numHasValue(Number.NaN)).toBe(false)
    expect(numHasValue(Infinity)).toBe(true)
    expect(numHasValue(-Infinity)).toBe(false)
    expect(numHasValue('1', true)).toBe(false)
    expect(numHasValue({})).toBe(false)
  })
})
