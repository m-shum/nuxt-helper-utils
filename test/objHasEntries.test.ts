import { describe, it, expect } from 'vitest'
import { objHasEntries } from '../src/runtime/utils/objHasEntries'

describe('objHasEntries', () => {
  it('returns true if argument is an object with entries', () => {
    expect(objHasEntries({ a: 1 })).toBe(true)
    expect(objHasEntries({ a: '1' })).toBe(true)
    expect(objHasEntries({ a: null, b: undefined })).toBe(false)
    expect(objHasEntries({})).toBe(false)
    expect(objHasEntries([])).toBe(false)
    expect(objHasEntries(['a'])).toBe(false)
    expect(objHasEntries(null)).toBe(false)
    expect(objHasEntries(undefined)).toBe(false)
    expect(objHasEntries('')).toBe(false)
    expect(objHasEntries(0)).toBe(false)
    expect(objHasEntries(1)).toBe(false)
  })
})
