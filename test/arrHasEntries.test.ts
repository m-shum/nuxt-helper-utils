import { describe, it, expect } from 'vitest'
import { arrHasEntries } from '../src/runtime/utils/arrHasEntries'

describe('arrHasValue', () => {
  it('returns true if argument is an array with entries', () => {
    expect(arrHasEntries([1])).toBe(true)
    expect(arrHasEntries([1, 2])).toBe(true)
    expect(arrHasEntries([{}])).toBe(true)
    expect(arrHasEntries([])).toBe(false)
    expect(arrHasEntries([null, null])).toBe(false)
    expect(arrHasEntries([null, undefined])).toBe(false)
    expect(arrHasEntries([undefined, undefined])).toBe(false)
    expect(arrHasEntries({})).toBe(false)
    expect(arrHasEntries(null)).toBe(false)
    expect(arrHasEntries(undefined)).toBe(false)
    expect(arrHasEntries(0)).toBe(false)
    expect(arrHasEntries('')).toBe(false)
  })
})
