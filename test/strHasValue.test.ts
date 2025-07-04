import { describe, it, expect } from 'vitest'
import { strHasValue } from '../src/runtime/utils/strHasValue'

describe('strHasValue', () => {
  it('returns true if argument is a non-nullish, non-empty string', () => {
    expect(strHasValue('a')).toBe(true)
    expect(strHasValue('')).toBe(false)
    expect(strHasValue(null)).toBe(false)
    expect(strHasValue(undefined)).toBe(false)
    expect(strHasValue({})).toBe(false)
    expect(strHasValue({ a: '' })).toBe(false)
    expect(strHasValue([])).toBe(false)
    expect(strHasValue(['a'])).toBe(false)
    expect(strHasValue(0)).toBe(false)
    expect(strHasValue(1)).toBe(false)
  })
})
